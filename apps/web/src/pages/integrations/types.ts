import type {
  BuilderFieldType,
  BuilderGroupValues,
  ChannelTypeEnum,
  FilterParts,
  IConfigCredentials,
  ICredentials,
  ILogoFileName,
  IProviderConfig,
  ProvidersIdEnum,
} from '@novu/shared';

export interface ITableIntegration {
  name: string;
  order: number;
  primary: boolean;
  integrationId: string;
  identifier: string;
  provider: string;
  providerId: ProvidersIdEnum;
  channel: string;
  channelType: ChannelTypeEnum;
  environment: string;
  active: boolean;
  logoFileName: IProviderConfig['logoFileName'];
  conditions?: any[];
}

export interface IIntegratedProvider {
  providerId: ProvidersIdEnum;
  integrationId: string;
  displayName: string;
  channel: ChannelTypeEnum;
  credentials: IConfigCredentials[];
  docReference: string;
  comingSoon: boolean;
  active: boolean;
  connected: boolean;
  logoFileName: ILogoFileName;
  betaVersion: boolean;
  novu?: boolean;
  environmentId?: string;
  name?: string;
  identifier?: string;
  primary: boolean;
  conditions?: {
    isNegated?: boolean;
    type?: BuilderFieldType;
    value?: BuilderGroupValues;
    children?: FilterParts[];
  }[];
}

export interface IntegrationEntity {
  _id?: string;
  _environmentId: string;
  _organizationId: string;
  name: string;
  identifier: string;
  providerId: ProvidersIdEnum;
  channel: ChannelTypeEnum;
  credentials: ICredentials;
  active: boolean;
  deleted: boolean;
  order: number;
  primary: boolean;
  deletedAt: string;
  deletedBy: string;
  conditions?: {
    isNegated?: boolean;
    type?: BuilderFieldType;
    value?: BuilderGroupValues;
    children?: FilterParts[];
  }[];
}
