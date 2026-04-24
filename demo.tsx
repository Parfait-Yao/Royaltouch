'use client';

import {
  AlertCircle,
  DollarSign,
  Package,
  TrendingUp,
  X,
  Database,
  Globe,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from '@/components/ui/chart';
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  CartesianGrid,
  Cell,
  LabelList,
  XAxis,
  YAxis,
  Legend,
  ComposedChart,
  Area,
} from 'recharts';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { api } from '@/lib/api';
import { formatMonth } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import React, { useMemo, useState } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface MonthlyModelPrice {
  month: string;
  brand: string;
  model: string;
  capacity: string;
  avgPrice: number;
  salesCount: number;
  std?: number;
  lower?: number;
  upper?: number;
  segment?: 'B2C' | 'B2B' | 'JUMIA';
}

interface ModelMargin {
  brand: string;
  model: string;
  capacity: string;
  avgRetailPrice: number;
  wholesalePrice: number;
  margin: number;
  salesCount: number;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const formatPrice = (value: number) =>
  new Intl.NumberFormat('fr-FR', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(value);

const formatCurrency = (value: number) => `${formatPrice(value)} FCFA`;

const getQuarterLabel = (data: { month?: string }[], index: number) => {
  if (!data || !data[index]) return '';
  const dateStr = data[index].month;
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return String(dateStr);
  const month = date.getMonth();
  const year = String(date.getFullYear()).slice(-2);
  if (month < 3) return `Jan–Mar ${year}`;
  if (month < 6) return `Apr–Jun ${year}`;
  if (month < 9) return `Jul–Sep ${year}`;
  return `Oct–Dec ${year}`;
};

const getSemesterLabel = (data: { month?: string }[], index: number) => {
  if (!data || !data[index]) return '';
  const dateStr = data[index].month;
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return String(dateStr);
  const month = date.getMonth();
  const year = String(date.getFullYear()).slice(-2);
  if (month < 6) return `Jan–Jun ${year}`;
  return `Jul–Dec ${year}`;
};

// Generate an array of distinct colors for the line/bar chart
const COLORS = [
  '#3b82f6',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#8b5cf6',
  '#06b6d4',
  '#ec4899',
  '#22c55e',
  '#6366f1',
  '#f97316',
];

// ─── Chart Configs ───────────────────────────────────────────────────────────

const comparisonChartConfig: ChartConfig = {
  avgRetailPrice: {
    label: 'Prix Retail',
    color: '#64748b', // Slate 500
  },
  wholesalePrice: {
    label: 'Prix Fournisseur',
    color: '#94a3b8', // Slate 400 (faded representation)
  },
};

// ─── Page Component ──────────────────────────────────────────────────────────

export default function RetailAnalyticsPage() {
  // ── Source State ──
  const [dataSource, setDataSource] = useState<'REVVO' | 'MARKET'>('REVVO');
  const [period, setPeriod] = useState<'1m' | '3m' | '6m'>('1m');
  const [compareEnabled, setCompareEnabled] = useState(false);

  // ── Filters State (Segment & Dates) ──
  const [segment, setSegment] = useState<string>('B2C');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  // ── Filters State (Brands & Models) ──
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [model1, setModel1] = useState<string>('');
  const [model2, setModel2] = useState<string>('');
  const [model3, setModel3] = useState<string>('');
  const [model4, setModel4] = useState<string>('');

  // ── Data fetching ──
  const {
    data: monthlyPrices,
    isLoading: isLoadingPrices,
    isError: isErrorPrices,
  } = useQuery<MonthlyModelPrice[]>({
    queryKey: [
      'retail-monthly-model-price',
      dataSource,
      segment,
      startDate,
      endDate,
    ],
    queryFn: () => {
      const endpoint = dataSource === 'REVVO' ? 'retail' : 'market';
      let url = `statistic/${endpoint}/monthly-model-price?segment=${segment}`;
      if (startDate) url += `&startDate=${startDate}`;
      if (endDate) url += `&endDate=${endDate}`;
      return api.get(url).json();
    },
    enabled: dataSource === 'REVVO' || compareEnabled,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const {
    data: marketPrices,
    isLoading: isLoadingMarket,
    isError: isErrorMarket,
  } = useQuery({
    queryKey: [
      'market-prices-external',
      segment,
      startDate,
      endDate,
      selectedBrand,
    ],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (segment) params.append('segment', segment);
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);
      if (selectedBrand && selectedBrand !== 'all')
        params.append('brand', selectedBrand);

      const url = `https://exodus-unhappy-bonded.ngrok-free.dev/market/prices?${params.toString()}`;
      const res = await fetch(url, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
          Accept: 'application/json',
        },
      });
      if (!res.ok) throw new Error('Market API error');
      return res.json();
    },
    enabled: dataSource === 'MARKET',
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const normalizedMarketPrices = useMemo(() => {
    const rawData =
      marketPrices?.data ||
      marketPrices?.result ||
      marketPrices?.items ||
      marketPrices;
    if (!rawData || !Array.isArray(rawData)) return [];

    let filteredData = rawData;
    if (period === '3m') {
      filteredData = rawData.filter(
        (item: { month?: string; date?: string }) => {
          const d = item.month || item.date;
          if (!d) return false;
          const m = new Date(d).getMonth() + 1;
          return m % 3 === 0; // Garde Mars, Juin, Septembre, Décembre
        },
      );
    } else if (period === '6m') {
      filteredData = rawData.filter(
        (item: { month?: string; date?: string }) => {
          const d = item.month || item.date;
          if (!d) return false;
          const m = new Date(d).getMonth() + 1;
          return m % 6 === 0; // Garde Juin, Décembre
        },
      );
    }

    return filteredData.map(
      (item: Record<string, number | string | undefined>) => {
        let avgPrice = 0;
        let std = 0;
        let upper = 0;
        let lower = 0;
        let salesCount = 0;

        if (period === '1m') {
          avgPrice = Number(item.avgPrice1m) || 0;
          std = Number(item.std1m) || 0;
          upper = Number(item.upper_1m) || 0;
          lower = Number(item.lower_1m) || 0;
          salesCount = Number(item.salesCount_1m) || 0;
        } else if (period === '3m') {
          avgPrice = Number(item.avgPrice3m) || 0;
          std = Number(item.std3m) || 0;
          upper = Number(item.upper_3m) || 0;
          lower = Number(item.lower_3m) || 0;
          salesCount = Number(item.salesCount_3m) || 0;
        } else if (period === '6m') {
          avgPrice = Number(item.avgPrice6m) || 0;
          std = Number(item.std6m) || 0;
          upper = Number(item.upper_6m) || 0;
          lower = Number(item.lower_6m) || 0;
          salesCount = Number(item.salesCount_6m) || 0;
        }

        return {
          month: String(item.month || item.date || ''),
          brand: String(item.brand || ''),
          model: String(item.model || ''),
          capacity: String(item.capacity || ''),
          avgPrice,
          std,
          upper,
          lower,
          salesCount,
          segment: item.segment as 'B2C' | 'B2B' | 'JUMIA' | undefined,
        };
      },
    );
  }, [marketPrices, period]);

  const activePrices =
    dataSource === 'REVVO' ? monthlyPrices : normalizedMarketPrices;

  const {
    data: modelMargins,
    isLoading: isLoadingMargins,
    isError: isErrorMargins,
  } = useQuery<ModelMargin[]>({
    queryKey: ['retail-model-margin', dataSource, segment],
    queryFn: () =>
      api.get(`statistic/retail/model-margin?segment=${segment}`).json(),
    enabled: dataSource === 'REVVO',
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  // ── Derived Filter Options ──
  const availableBrands = useMemo(() => {
    if (dataSource === 'MARKET') {
      if (!normalizedMarketPrices) return [];
      const brands = new Set(
        normalizedMarketPrices.map((item) => item.brand).filter(Boolean),
      );
      return Array.from(brands).sort();
    }
    if (!modelMargins) return [];
    const brands = new Set(
      modelMargins.map((item) => item.brand).filter(Boolean),
    );
    return Array.from(brands).sort();
  }, [modelMargins, dataSource, normalizedMarketPrices]);

  // All unique model labels for the 4 selects
  const allUniqueModels = useMemo(() => {
    if (!activePrices) return [];
    const modelsMap = new Map<string, string>();
    activePrices.forEach((item) => {
      if (selectedBrand === 'all' || item.brand === selectedBrand) {
        const label = `${item.brand} ${item.model} ${item.capacity}`;
        modelsMap.set(label, label);
      }
    });
    return Array.from(modelsMap.keys()).sort();
  }, [activePrices, selectedBrand]);

  // Single source of truth: array of selected model labels (non-empty)
  const selectedModels = useMemo(
    () => [model1, model2, model3, model4].filter(Boolean),
    [model1, model2, model3, model4],
  );

  // Helper to update a model slot
  const modelSetters = [setModel1, setModel2, setModel3, setModel4];
  const modelValues = [model1, model2, model3, model4];

  const handleBrandChange = (value: string) => {
    setSelectedBrand(value);
    // Reset model selects when brand changes
    setModel1('');
    setModel2('');
    setModel3('');
    setModel4('');
  };

  // ── Filter Data ──
  const filteredMargins = useMemo(() => {
    if (!modelMargins) return [];
    if (selectedModels.length === 0) {
      // No model selected: show all (filtered by brand)
      return modelMargins.filter(
        (item) => selectedBrand === 'all' || item.brand === selectedBrand,
      );
    }
    return modelMargins.filter((item) => {
      const label = `${item.brand} ${item.model} ${item.capacity}`;
      return selectedModels.includes(label);
    });
  }, [modelMargins, selectedBrand, selectedModels]);

  const filteredMonthlyPrices = useMemo(() => {
    if (!activePrices) return [];
    if (selectedModels.length === 0) {
      return activePrices.filter(
        (item) => selectedBrand === 'all' || item.brand === selectedBrand,
      );
    }
    return activePrices.filter((item) => {
      const label = `${item.brand} ${item.model} ${item.capacity}`;
      return selectedModels.includes(label);
    });
  }, [activePrices, selectedBrand, selectedModels]);

  // ── Data Transformation for Trend Chart ──
  const { transformedTrendData, uniqueModelsKeys, rawTrendDataMap } =
    useMemo(() => {
      if (filteredMonthlyPrices.length === 0)
        return {
          transformedTrendData: [],
          uniqueModelsKeys: [],
          rawTrendDataMap: {},
        };

      const grouped: Record<string, Record<string, unknown>> = {};
      const modelsKeys = new Set<string>();
      const rawMap: Record<string, Record<string, MonthlyModelPrice>> = {};
      const salesPerModel: Record<string, number> = {};

      filteredMonthlyPrices.forEach((dataItem) => {
        const {
          month,
          brand,
          model,
          capacity,
          avgPrice,
          salesCount,
          lower,
          upper,
        } = dataItem;
        if (!month) return; // Prevent undefined index

        const key = `${brand} ${model} ${capacity}`; // Use full label for key
        modelsKeys.add(key);
        salesPerModel[key] = (salesPerModel[key] || 0) + salesCount;

        if (!grouped[month]) {
          grouped[month] = { month };
          rawMap[month] = {};
        }

        // For charting
        grouped[month][`${key}__mean`] = avgPrice;
        if (lower !== undefined && upper !== undefined) {
          grouped[month][`${key}__lower`] = lower;
          grouped[month][`${key}__range`] = upper - lower;
        } else {
          grouped[month][`${key}__lower`] = avgPrice; // Fallback so area represents nothing
          grouped[month][`${key}__range`] = 0;
        }
        // For custom tooltip raw access
        rawMap[month][key] = dataItem;
      });

      // Determine models to show
      let finalUniqueModelsKeys: string[] = [];
      if (selectedModels.length > 0) {
        // Show only selected models (that exist in current data)
        finalUniqueModelsKeys = selectedModels.filter((k) => modelsKeys.has(k));
      } else {
        // No selection: show top 1 by sales (default)
        finalUniqueModelsKeys = Array.from(modelsKeys)
          .sort((a, b) => salesPerModel[b] - salesPerModel[a])
          .slice(0, 1);
      }

      const transformedData = Object.values(grouped).sort((a, b) => {
        const dateA = (a.month as string) || '';
        const dateB = (b.month as string) || '';
        return dateA.localeCompare(dateB);
      });

      return {
        transformedTrendData: transformedData,
        uniqueModelsKeys: finalUniqueModelsKeys,
        rawTrendDataMap: rawMap,
      };
    }, [filteredMonthlyPrices, selectedModels]);

  // ── Combined Data for Comparison ──
  const combinedTrendData = useMemo(() => {
    if (dataSource !== 'MARKET' || !compareEnabled || !monthlyPrices) {
      return transformedTrendData;
    }

    const revvoMap: Record<string, Record<string, number>> = {};
    monthlyPrices.forEach((item) => {
      const label = `${item.brand} ${item.model} ${item.capacity}`;
      if (selectedModels.includes(label)) {
        if (!revvoMap[item.month]) revvoMap[item.month] = {};
        revvoMap[item.month][`revvo_${label}`] = item.avgPrice;
      }
    });

    return transformedTrendData.map((dataItem) => {
      const month = dataItem.month as string;
      return {
        ...dataItem,
        ...(revvoMap[month] || {}),
      };
    });
  }, [
    transformedTrendData,
    dataSource,
    compareEnabled,
    monthlyPrices,
    selectedModels,
  ]);

  // Generate ChartConfig dynamically for Line Chart based on unique models
  const trendChartConfig = useMemo(() => {
    const config: ChartConfig = {};
    uniqueModelsKeys.forEach((key, index) => {
      config[key] = {
        label: key,
        color: COLORS[index % COLORS.length],
      };
      if (dataSource === 'MARKET' && compareEnabled) {
        const marketColor = COLORS[index % COLORS.length];
        const isRed = marketColor === '#ef4444';
        const revvoColor = isRed ? '#f97316' : '#ef4444';
        config[`revvo_${key}`] = {
          label: `Revvo - ${key}`,
          color: revvoColor,
        };
      }
    });
    return config;
  }, [uniqueModelsKeys, dataSource, compareEnabled]);

  // ── Data Transformation for Sales Volume ──
  const salesVolumeByMonth = useMemo(() => {
    if (filteredMonthlyPrices.length === 0) return [];
    const grouped: Record<string, Record<string, unknown>> = {};

    filteredMonthlyPrices.forEach(
      ({ month, brand, model, capacity, salesCount }) => {
        if (!month) return; // Prevent undefined index
        const key = `${brand} ${model} ${capacity}`;
        if (!grouped[month]) grouped[month] = { month };
        grouped[month][key] = salesCount;
      },
    );

    return Object.values(grouped).sort((a, b) => {
      const dateA = (a.month as string) || '';
      const dateB = (b.month as string) || '';
      return dateA.localeCompare(dateB);
    });
  }, [filteredMonthlyPrices]);

  // ── Margins for the BarChart (selected or top by sales) ──
  const topFilteredMargins = useMemo(() => {
    if (selectedModels.length > 0) {
      // Show exactly the selected models in selection order
      return selectedModels
        .map((label) =>
          filteredMargins.find(
            (m) => `${m.brand} ${m.model} ${m.capacity}` === label,
          ),
        )
        .filter((x): x is ModelMargin => !!x);
    }
    return [...filteredMargins]
      .sort((a, b) => b.salesCount - a.salesCount)
      .slice(0, 6);
  }, [filteredMargins, selectedModels]);

  // ── Dynamic Titles ──
  const segmentLabel =
    segment === 'B2C'
      ? 'B2C'
      : segment === 'B2B'
        ? 'B2B (Revendeurs)'
        : 'JUMIA';

  const pageTitle = useMemo(() => {
    const sourceLabel = dataSource === 'REVVO' ? 'Revvo' : 'Marché';
    if (selectedModels.length === 1)
      return `${selectedModels[0]} — ${segmentLabel} — ${sourceLabel}`;
    if (selectedModels.length > 1)
      return `Comparaison ${selectedModels.length} modèles — ${segmentLabel} — ${sourceLabel}`;
    if (selectedBrand !== 'all')
      return `${selectedBrand} — ${segmentLabel} — ${sourceLabel}`;
    return `Retail Price Analytics — ${segmentLabel} — ${sourceLabel}`;
  }, [selectedModels, selectedBrand, segmentLabel, dataSource]);

  const pageDescription = useMemo(() => {
    if (selectedModels.length === 1)
      return `Évolution mensuelle des prix et marges pour ${selectedModels[0]}.`;
    if (selectedModels.length > 1)
      return `Comparaison de ${selectedModels.length} modèles sélectionnés — prix et marges mensuels.`;
    if (selectedBrand !== 'all')
      return `Analyse des prix et marges pour la marque ${selectedBrand} (${segmentLabel}).`;
    return `Analyse de l'évolution mensuelle des prix des ventes des modèles et comparaison avec les prix fournisseurs.`;
  }, [selectedModels, selectedBrand, segmentLabel]);

  const isModelSelectedLabel = useMemo(() => {
    if (selectedModels.length > 0) {
      return `— ${selectedModels.length} modèle${selectedModels.length > 1 ? 's' : ''} sélectionné${selectedModels.length > 1 ? 's' : ''}`;
    }
    return 'par modèle';
  }, [selectedModels]);

  // ── Global States ──
  const hasError =
    (dataSource === 'REVVO' ? isErrorPrices : isErrorMarket) || isErrorMargins;
  const isInitialLoading =
    (dataSource === 'REVVO' ? isLoadingPrices : isLoadingMarket) ||
    isLoadingMargins;

  if (isInitialLoading) {
    return (
      <div className="space-y-6 p-6">
        <div className="mb-8">
          <Skeleton className="mb-2 w-80 h-9" />
          <Skeleton className="w-96 h-5" />
        </div>
        {/* Filters Skeleton */}
        <div className="flex gap-4 mb-6">
          <Skeleton className="w-[180px] h-10" />
          <Skeleton className="w-[180px] h-10" />
          <Skeleton className="w-[180px] h-10" />
        </div>
        {/* Evolution Chart */}
        <Skeleton className="rounded-xl h-96" />

        {/* Two Columns for Bar Chart and Sales */}
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 mt-6">
          <Skeleton className="rounded-xl h-80" />
          <Skeleton className="rounded-xl h-80" />
        </div>

        {/* Table Skeleton */}
        <Skeleton className="mt-6 rounded-xl h-64" />
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <div className="mb-4">
        <h1 className="mb-2 font-bold text-3xl">{pageTitle}</h1>
        <p className="text-muted-foreground">{pageDescription}</p>
      </div>
      {/* ── Error Banner ────────────────────────────────────────────── */}
      {hasError && (
        <div className="flex items-center gap-3 bg-red-50 mb-6 p-4 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
          <p className="text-red-700 text-sm">
            Certaines données n&apos;ont pas pu être chargées. Vérifiez que
            l&apos;API est disponible.
          </p>
        </div>
      )}

      {/* ── Tabs ── */}
      <div className="flex justify-center mb-6">
        <Tabs
          value={dataSource}
          onValueChange={(v) => {
            const val = v as 'REVVO' | 'MARKET';
            setDataSource(val);
            if (val === 'MARKET') {
              setModel3('');
              setModel4('');
            }
          }}
          className="w-full sm:w-[480px]"
        >
          <TabsList className="grid grid-cols-2 h-auto p-1.5 bg-slate-100/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner">
            <TabsTrigger
              value="REVVO"
              className="flex flex-col items-center gap-1 py-2.5 rounded-xl transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:text-blue-600 data-[state=active]:shadow-xl border border-transparent data-[state=active]:border-slate-200/50"
            >
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 transition-transform group-data-[state=active]:scale-110" />
                <span className="font-bold text-sm uppercase tracking-tight">
                  Revvo
                </span>
              </div>
              <span className="text-[10px] font-medium opacity-60">
                Analyses Internes
              </span>
            </TabsTrigger>

            <TabsTrigger
              value="MARKET"
              className="flex flex-col items-center gap-1 py-2.5 rounded-xl transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:text-indigo-600 data-[state=active]:shadow-xl border border-transparent data-[state=active]:border-slate-200/50"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 transition-transform group-data-[state=active]:scale-110" />
                <span className="font-bold text-sm uppercase tracking-tight">
                  Marché
                </span>
              </div>
              <span className="text-[10px] font-medium opacity-60">
                Veille Externe
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* ── Section 1 — Filtres ───────────────────────────────────── */}
      <Card>
        <CardContent className="flex sm:flex-row flex-col flex-wrap items-center gap-4 p-4">
          {/* Segment */}
          <div className="space-y-1 w-full sm:w-[150px]">
            <label className="ml-1 font-medium text-muted-foreground text-xs">
              Type de client
            </label>
            <Select value={segment} onValueChange={(val) => setSegment(val)}>
              <SelectTrigger>
                <SelectValue placeholder="Type de client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="B2C">B2C</SelectItem>
                <SelectItem value="B2B">B2B</SelectItem>
                <SelectItem value="JUMIA">JUMIA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Brand */}
          <div className="space-y-1 w-full sm:w-[180px]">
            <label className="ml-1 font-medium text-muted-foreground text-xs">
              Marque
            </label>
            <Select value={selectedBrand} onValueChange={handleBrandChange}>
              <SelectTrigger>
                <SelectValue placeholder="Toutes les marques" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les marques</SelectItem>
                {availableBrands.map((b) => (
                  <SelectItem key={String(b)} value={String(b)}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Dates */}
          <div className="space-y-1 w-full sm:w-[150px]">
            <label className="ml-1 font-medium text-muted-foreground text-xs">
              Date de début
            </label>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="h-10 text-sm"
            />
          </div>
          <div className="space-y-1 w-full sm:w-[150px]">
            <label className="ml-1 font-medium text-muted-foreground text-xs">
              Date de fin
            </label>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="h-10 text-sm"
            />
          </div>
          {dataSource === 'MARKET' && (
            <div className="space-y-1 w-full sm:w-[150px]">
              <label className="ml-1 font-medium text-muted-foreground text-xs">
                Période
              </label>
              <Select
                value={period}
                onValueChange={(v) => setPeriod(v as '1m' | '3m' | '6m')}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Période" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m">1 mois</SelectItem>
                  <SelectItem value="3m">3 mois</SelectItem>
                  <SelectItem value="6m">6 mois</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>

        {/* ── 4 Fixed Model Selects ── */}
        <CardContent className="p-4 pt-0 border-t">
          <p className="mb-3 font-medium text-muted-foreground text-xs">
            Sélection des modèles (jusqu&apos;à{' '}
            {dataSource === 'MARKET' ? 2 : 4})
          </p>
          <div className="gap-3 grid grid-cols-2">
            {[0, 1, 2, 3]
              .slice(0, dataSource === 'MARKET' ? 2 : 4)
              .map((idx) => (
                <div key={idx} className="flex items-center gap-1 shrink-0">
                  <div className="space-y-1 w-[200px]">
                    <label className="ml-1 font-medium text-muted-foreground text-xs">
                      Modèle {idx + 1}
                    </label>
                    <Select
                      value={modelValues[idx]}
                      onValueChange={(val) => modelSetters[idx](val)}
                    >
                      <SelectTrigger className="h-9 text-xs">
                        <SelectValue placeholder="Sélectionner…" />
                      </SelectTrigger>
                      <SelectContent>
                        {allUniqueModels.map((m) => (
                          <SelectItem
                            key={m}
                            value={m}
                            disabled={modelValues.some(
                              (v, i) => i !== idx && v === m,
                            )}
                          >
                            {m}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {modelValues[idx] && (
                    <button
                      className="mt-5 text-muted-foreground hover:text-red-500 transition-colors shrink-0"
                      onClick={() => modelSetters[idx]('')}
                      aria-label="Supprimer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Section 2 — Graphique évolution des prix ──────────────────────── */}
      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <CardTitle>
                {period === '1m'
                  ? 'Évolution mensuelle des prix des ventes'
                  : period === '3m'
                    ? 'Évolution trimestrielle des prix des ventes'
                    : 'Évolution semestrielle des prix des ventes'}{' '}
                {isModelSelectedLabel}
              </CardTitle>
            </div>
            <CardDescription>
              {period === '1m'
                ? 'Suivi du prix moyen mensuel par modèle'
                : period === '3m'
                  ? 'Suivi du prix moyen sur 3 mois glissants (vision trimestrielle)'
                  : 'Suivi du prix moyen sur 6 mois glissants (vision semestrielle)'}
            </CardDescription>
          </div>
          {dataSource === 'MARKET' && (
            <button
              onClick={() => setCompareEnabled(!compareEnabled)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md border transition-colors ${
                compareEnabled
                  ? 'bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-400'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-transparent dark:border-slate-800 dark:text-slate-400'
              }`}
            >
              {compareEnabled ? 'Comparer avec Revvo : ON' : 'Comparer avec Revvo : OFF'}
            </button>
          )}
        </CardHeader>
        <CardContent>
          {isLoadingPrices || isLoadingMarket ? (
            <div className="flex flex-col space-y-4 p-8">
              <Skeleton className="h-[250px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ) : transformedTrendData.length > 0 ? (
            <ChartContainer config={trendChartConfig} className="w-full h-80">
              <ComposedChart data={combinedTrendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value, index) => {
                    if (period === '1m') {
                      return formatMonth(value);
                    }
                    if (period === '3m') {
                      return getQuarterLabel(transformedTrendData, index);
                    }
                    if (period === '6m') {
                      return getSemesterLabel(transformedTrendData, index);
                    }
                    return formatMonth(value);
                  }}
                  interval={dataSource === 'MARKET' ? 0 : 'preserveEnd'}
                  angle={dataSource === 'MARKET' ? -45 : 0}
                  textAnchor={dataSource === 'MARKET' ? 'end' : 'middle'}
                  height={dataSource === 'MARKET' ? 60 : 30}
                  padding={{ left: 20, right: 20 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  width={80}
                  tickFormatter={(v) =>
                    v >= 1_000_000
                      ? `${(v / 1_000_000).toFixed(1)}M`
                      : v >= 1_000
                        ? `${(v / 1_000).toFixed(0)}K`
                        : String(v)
                  }
                />
                <ChartTooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="flex flex-col gap-3 bg-slate-950 shadow-sm p-4 border border-slate-800 rounded-lg min-w-[280px] text-slate-100">
                          <div className="pb-1 border-slate-800 border-b font-bold text-slate-400">
                            {formatMonth(label as string)}
                          </div>
                          {payload.map((entry, index) => {
                            const rawItem =
                              rawTrendDataMap?.[label as string]?.[
                                entry.name as string
                              ];
                            if (!rawItem) return null;
                            return (
                              <div
                                key={index}
                                className="flex justify-between items-center gap-4"
                              >
                                <div className="flex items-center gap-2">
                                  <div
                                    className="rounded-full w-2 h-2"
                                    style={{ backgroundColor: entry.color }}
                                  />
                                  <span className="font-medium text-sm">
                                    {rawItem.brand} {rawItem.model}{' '}
                                    {rawItem.capacity}
                                  </span>
                                </div>
                                <div className="flex flex-col items-end">
                                  <span className="font-bold text-sm">
                                    {formatCurrency(rawItem.avgPrice)}
                                  </span>
                                  {rawItem.std !== undefined && (
                                    <span className="text-xs text-slate-400">
                                      ± {formatCurrency(rawItem.std)}
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  wrapperStyle={{ paddingTop: '20px' }}
                />
                {uniqueModelsKeys.map((key) => (
                  <Area
                    key={`${key}-lower`}
                    dataKey={`${key}__lower`}
                    stackId={key}
                    fill="transparent"
                    stroke="transparent"
                    isAnimationActive={false}
                  />
                ))}
                {uniqueModelsKeys.map((key) => (
                  <Area
                    key={`${key}-range`}
                    dataKey={`${key}__range`}
                    stackId={key}
                    fill={trendChartConfig[key]?.color}
                    fillOpacity={
                      period === '1m' ? 0.12 : period === '3m' ? 0.08 : 0.05
                    }
                    stroke="transparent"
                    isAnimationActive={false}
                  />
                ))}
                {uniqueModelsKeys.map((key) => (
                  <Line
                    key={`${key}-mean`}
                    dataKey={`${key}__mean`}
                    name={key}
                    stroke={trendChartConfig[key]?.color}
                    strokeDasharray={
                      period === '3m' ? '5 5' : period === '6m' ? '2 2' : '0'
                    }
                    strokeWidth={period === '6m' ? 3 : 2}
                    type="monotone"
                  >
                    <LabelList
                      dataKey={`${key}__mean`}
                      content={(props) => {
                        const { x, y, index } = props as {
                          x: number;
                          y: number;
                          index?: number;
                        };
                        if (index === undefined) return null;

                        const item = transformedTrendData[index];
                        if (!item) return null;

                        const lower = item[`${key}__lower`] as
                          | number
                          | undefined;
                        const range = item[`${key}__range`] as
                          | number
                          | undefined;

                        if (
                          typeof lower !== 'number' ||
                          typeof range !== 'number'
                        )
                          return null;

                        const upper = lower + range;

                        return (
                          <text
                            x={x}
                            y={y - 20}
                            fontSize={10}
                            fill="#64748b"
                            textAnchor="middle"
                          >
                            {upper >= 1000
                              ? `${Math.round(upper / 1000)}K`
                              : upper}
                          </text>
                        );
                      }}
                    />
                    <LabelList
                      dataKey={`${key}__mean`}
                      content={(props) => {
                        const { x, y, index } = props as {
                          x: number;
                          y: number;
                          index?: number;
                        };
                        if (index === undefined) return null;

                        const item = transformedTrendData[index];
                        if (!item) return null;

                        const lowerVal = item[`${key}__lower`];
                        const lower =
                          typeof lowerVal === 'number' ? lowerVal : undefined;

                        if (typeof lower !== 'number') return null;

                        return (
                          <text
                            x={x}
                            y={y + 15}
                            fontSize={10}
                            fill="#94a3b8"
                            textAnchor="middle"
                          >
                            {lower >= 1000
                              ? `${Math.round(lower / 1000)}K`
                              : lower}
                          </text>
                        );
                      }}
                    />
                    <LabelList
                      dataKey={`${key}__mean`}
                      position="top"
                      fontSize={11}
                      fontWeight={700}
                      formatter={(v: number) =>
                        v >= 1_000_000
                          ? `${(v / 1_000_000).toFixed(1)}M`
                          : v >= 1_000
                            ? `${(v / 1_000).toFixed(0)}K`
                            : String(v)
                      }
                    />
                  </Line>
                ))}
                {compareEnabled &&
                  dataSource === 'MARKET' &&
                  uniqueModelsKeys.map((key, index) => {
                    const marketColor = COLORS[index % COLORS.length];
                    const isRed = marketColor === '#ef4444';
                    const revvoColor = isRed ? '#f97316' : '#ef4444';

                    return (
                      <Line
                        key={`revvo-${key}`}
                        dataKey={`revvo_${key}`}
                        name={`Revvo - ${key}`}
                        stroke={revvoColor}
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={false}
                        type="monotone"
                      />
                    );
                  })}
              </ComposedChart>
            </ChartContainer>
          ) : (
            <div className="flex justify-center items-center border border-dashed rounded-md h-80">
              <p className="text-muted-foreground text-sm">
                Aucune donnée disponible pour les filtres sélectionnés.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="gap-6 grid grid-cols-1">
        {/* ── Section 3 — Volume de ventes ────────────────────────────────── */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-indigo-500" />
              <CardTitle>
                {dataSource === 'REVVO'
                  ? 'Volume de ventes'
                  : "Volume d'observations"}{' '}
                {isModelSelectedLabel}
              </CardTitle>
            </div>
            <CardDescription>
              {dataSource === 'REVVO'
                ? 'Nombre de produits vendus'
                : "Nombre d'observations"}{' '}
              par mois selon les filtres
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoadingPrices || isLoadingMarket ? (
              <div className="flex flex-col space-y-4 p-4">
                <Skeleton className="h-[180px] w-full rounded-lg" />
              </div>
            ) : salesVolumeByMonth.length > 0 ? (
              <ChartContainer config={trendChartConfig} className="w-full h-64">
                <LineChart data={salesVolumeByMonth}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={formatMonth}
                    interval={dataSource === 'MARKET' ? 0 : 'preserveEnd'}
                    angle={dataSource === 'MARKET' ? -45 : 0}
                    textAnchor={dataSource === 'MARKET' ? 'end' : 'middle'}
                    height={dataSource === 'MARKET' ? 60 : 30}
                    padding={{ left: 20, right: 20 }}
                  />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="flex flex-col gap-3 bg-slate-950 shadow-sm p-4 border border-slate-800 rounded-lg min-w-[280px] text-slate-100">
                            <div className="pb-1 border-slate-800 border-b font-bold text-slate-400">
                              {formatMonth(label as string)}
                            </div>
                            {payload.map((entry, index) => {
                              const rawItem =
                                rawTrendDataMap?.[label as string]?.[
                                  entry.name as string
                                ];
                              if (!rawItem) return null;
                              return (
                                <div
                                  key={index}
                                  className="flex justify-between items-center gap-4"
                                >
                                  <div className="flex items-center gap-2">
                                    <div
                                      className="rounded-full w-2 h-2"
                                      style={{ backgroundColor: entry.color }}
                                    />
                                    <span className="font-medium text-sm">
                                      {rawItem.brand} {rawItem.model}{' '}
                                      {rawItem.capacity}
                                    </span>
                                  </div>
                                  <span className="font-bold text-sm">
                                    {formatPrice(rawItem.salesCount)}{' '}
                                    {dataSource === 'REVVO' ? 'unités' : 'obs.'}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        );
                      }
                      return null;
                    }}
                    cursor={{ fill: 'var(--muted)' }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    wrapperStyle={{ paddingTop: '20px' }}
                  />
                  {uniqueModelsKeys.map((key) => (
                    <Line
                      key={key}
                      dataKey={key}
                      name={key}
                      stroke={trendChartConfig[key]?.color}
                      strokeWidth={2}
                      type="monotone"
                    >
                      <LabelList
                        dataKey={key}
                        position="top"
                        fontSize={11}
                        fontWeight={700}
                      />
                    </Line>
                  ))}
                </LineChart>
              </ChartContainer>
            ) : (
              <div className="flex justify-center items-center border border-dashed rounded-md h-64">
                <p className="text-muted-foreground text-sm">
                  Aucune donnée disponible pour les filtres sélectionnés.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* ── Section 5 — Rentabilité BarChart ────────────────────── */}
      {dataSource === 'REVVO' ? (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-500" />
              <CardTitle>
                Rentabilité des ventes {isModelSelectedLabel}
              </CardTitle>
            </div>
            <CardDescription>
              Prix retail moyen, prix fournisseur et marge brute
            </CardDescription>
          </CardHeader>
          <CardContent>
            {topFilteredMargins.length > 0 ? (
              <ChartContainer
                config={comparisonChartConfig}
                className="w-full h-72"
              >
                <BarChart
                  data={topFilteredMargins.map((item) => ({
                    ...item,
                    _label: `${item.brand} ${item.model} ${item.capacity}`,
                  }))}
                  margin={{ top: 20, right: 20, left: 20, bottom: 60 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="_label"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tick={{ fontSize: 10 }}
                    angle={-20}
                    textAnchor="end"
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) =>
                      v >= 1_000_000
                        ? `${(v / 1_000_000).toFixed(1)}M`
                        : v >= 1_000
                          ? `${(v / 1_000).toFixed(0)}K`
                          : String(v)
                    }
                  />
                  <ChartTooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const item = payload[0].payload as ModelMargin & {
                          _label: string;
                        };
                        return (
                          <div className="flex flex-col gap-2 bg-slate-950 shadow-sm p-4 border border-slate-800 rounded-lg text-slate-100">
                            <span className="font-semibold text-sm">
                              {item._label}
                            </span>
                            <div className="gap-x-4 gap-y-1 grid grid-cols-[auto_1fr] text-sm">
                              <span className="text-slate-400">
                                Prix retail :
                              </span>
                              <span className="font-medium text-right">
                                {formatCurrency(item.avgRetailPrice)}
                              </span>
                              <span className="text-slate-400">
                                Prix fournisseur :
                              </span>
                              <span className="font-medium text-right">
                                {formatCurrency(item.wholesalePrice)}
                              </span>
                              <span className="text-slate-400">Marge :</span>
                              <span className="font-medium text-emerald-400 text-right">
                                {formatCurrency(item.margin)}
                              </span>
                              <span className="text-slate-400">Volume :</span>
                              <span className="font-medium text-right">
                                {formatPrice(item.salesCount)} unités
                              </span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend
                    verticalAlign="top"
                    align="right"
                    wrapperStyle={{ paddingBottom: '10px' }}
                  />
                  <Bar
                    dataKey="avgRetailPrice"
                    name="Prix Retail"
                    radius={[4, 4, 0, 0]}
                    fill="#6366f1"
                  >
                    {topFilteredMargins.map((_, index) => (
                      <Cell
                        key={`retail-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                  <Bar
                    dataKey="wholesalePrice"
                    name="Prix Fournisseur"
                    radius={[4, 4, 0, 0]}
                    fill="#94a3b8"
                  >
                    {topFilteredMargins.map((_, index) => (
                      <Cell
                        key={`wholesale-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        fillOpacity={0.45}
                      />
                    ))}
                  </Bar>
                  <Bar
                    dataKey="margin"
                    name="Marge"
                    radius={[4, 4, 0, 0]}
                    fill="#10b981"
                  >
                    {topFilteredMargins.map((_, index) => (
                      <Cell
                        key={`margin-${index}`}
                        fill="#10b981"
                        fillOpacity={0.8}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            ) : (
              <div className="flex justify-center items-center border border-dashed rounded-md h-72">
                <p className="text-muted-foreground text-sm">
                  Aucune donnée disponible avec les filtres actuels.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-slate-400" />
              <CardTitle>
                Rentabilité des ventes {isModelSelectedLabel}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex justify-center items-center h-40">
            <p className="text-muted-foreground text-sm">
              La rentabilité n&apos;est pas disponible pour les données marché.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
