import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalAgeCard extends Struct.ComponentSchema {
  collectionName: 'components_global_age_cards';
  info: {
    displayName: 'AgeCard';
    icon: 'connector';
  };
  attributes: {
    Body: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface GlobalAgeGroupSection extends Struct.ComponentSchema {
  collectionName: 'components_global_age_group_sections';
  info: {
    description: '';
    displayName: 'AgeGroupSection';
    icon: 'eye';
  };
  attributes: {
    Body: Schema.Attribute.Text;
    Content: Schema.Attribute.Component<'global.age-card', true>;
    featuredText: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface GlobalBasicKindiSection extends Struct.ComponentSchema {
  collectionName: 'components_global_basic_kindi_sections';
  info: {
    description: '';
    displayName: 'Basic Kindi Section';
    icon: 'cloud';
  };
  attributes: {
    BodyDescription: Schema.Attribute.RichText;
    featuredText: Schema.Attribute.String;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface GlobalFaq extends Struct.ComponentSchema {
  collectionName: 'components_global_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
    icon: 'bell';
  };
  attributes: {
    Answer: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Educational play activities, ensuring children learn and develop consistently.'>;
    Question: Schema.Attribute.String;
  };
}

export interface GlobalKindiRegularSection extends Struct.ComponentSchema {
  collectionName: 'components_global_kindi_regular_sections';
  info: {
    description: '';
    displayName: 'Kindi Regular Section';
    icon: 'arrowRight';
  };
  attributes: {
    bgcolor: Schema.Attribute.String;
    Body: Schema.Attribute.RichText;
    featuredText: Schema.Attribute.Text;
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface GlobalPricingComponent extends Struct.ComponentSchema {
  collectionName: 'components_global_pricing_components';
  info: {
    description: '';
    displayName: 'Pricing Component';
    icon: 'shoppingCart';
  };
  attributes: {
    HelpText: Schema.Attribute.Text;
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

export interface GlobalTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_global_team_members';
  info: {
    displayName: 'Team Member';
    icon: 'briefcase';
  };
  attributes: {
    About: Schema.Attribute.RichText;
    Degree: Schema.Attribute.Text;
    Name: Schema.Attribute.String;
  };
}

export interface GlobalToggleCard extends Struct.ComponentSchema {
  collectionName: 'components_global_toggle_cards';
  info: {
    displayName: 'ToggleCard';
    icon: 'archive';
  };
  attributes: {
    bgcolor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 3;
      }>;
    Body: Schema.Attribute.RichText;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface UserKidProfile extends Struct.ComponentSchema {
  collectionName: 'components_user_kid_profiles';
  info: {
    description: '';
    displayName: 'KidProfile';
    icon: 'archive';
  };
  attributes: {
    age: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    AttendingNursury: Schema.Attribute.Boolean;
    dob: Schema.Attribute.Date & Schema.Attribute.DefaultTo<'2024-12-01'>;
    Gender: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Male'>;
    Name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Kid Name'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.age-card': GlobalAgeCard;
      'global.age-group-section': GlobalAgeGroupSection;
      'global.basic-kindi-section': GlobalBasicKindiSection;
      'global.faq': GlobalFaq;
      'global.kindi-regular-section': GlobalKindiRegularSection;
      'global.pricing-component': GlobalPricingComponent;
      'global.pricing-entry': GlobalPricingEntry;
      'global.review-component': GlobalReviewComponent;
      'global.standard-pages-data': GlobalStandardPagesData;
      'global.team-member': GlobalTeamMember;
      'global.toggle-card': GlobalToggleCard;
      'user.kid-profile': UserKidProfile;
    }
  }
}
