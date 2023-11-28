export type PartDashboardStructure = PartStructure[];

export interface PartStructure {
  name: string;
  features: FeaturesStructure;
}

export type FeaturesStructure = FeatureStructure[];

export interface FeatureStructure {
  featureName: string;
  measurements: MeasurementsStructure;
}

export type MeasurementsStructure = MeasurementStructure[];

export interface MeasurementStructure {
  control: string;
  expected: number;
  deviation: number;
  devOutTol: number;
}
