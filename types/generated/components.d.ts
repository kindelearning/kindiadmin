import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalBasicKindiSection extends Struct.ComponentSchema {
  collectionName: 'components_global_basic_kindi_sections';
  info: {
    displayName: 'Basic Kindi Section';
    icon: 'cloud';
  };
  attributes: {
    BodyDescription: Schema.Attribute.Blocks;
    featuredText: Schema.Attribute.String;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface GlobalPricingComponent extends Struct.ComponentSchema {
  collectionName: 'components_global_pricing_components';
  info: {
    displayName: 'Pricing Component';
    icon: 'shoppingCart';
  };
  attributes: {
    HelpText: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Educational play activities, ensuring children learn and develop consistently.'>;
    isIncluded: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Title: Schema.Attribute.String;
  };
}

export interface GlobalPricingEntry extends Struct.ComponentSchema {
  collectionName: 'components_global_pricing_entries';
  info: {
    description: '';
    displayName: 'Pricing Entry';
    icon: 'bell';
  };
  attributes: {
    Features: Schema.Attribute.Component<'global.pricing-component', true>;
    Price: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<29.99>;
    PriceBody: Schema.Attribute.RichText;
    PriceTitle: Schema.Attribute.String;
    Thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GlobalReviewComponent extends Struct.ComponentSchema {
  collectionName: 'components_global_review_components';
  info: {
    description: '';
    displayName: 'Review Component';
    icon: 'star';
  };
  attributes: {
    bgcolor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 3;
      }>;
    body: Schema.Attribute.RichText;
    featuredText: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface GlobalStandardPagesData extends Struct.ComponentSchema {
  collectionName: 'components_global_standard_pages_data';
  info: {
    description: '';
    displayName: 'StandardPagesData';
    icon: 'apps';
  };
  attributes: {
    Body: Schema.Attribute.Text;
    Lastupdated: Schema.Attribute.Date &
      Schema.Attribute.DefaultTo<'2024-12-01'>;
    Pagecontent: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.basic-kindi-section': GlobalBasicKindiSection;
      'global.pricing-component': GlobalPricingComponent;
      'global.pricing-entry': GlobalPricingEntry;
      'global.review-component': GlobalReviewComponent;
      'global.standard-pages-data': GlobalStandardPagesData;
    }
  }
}
