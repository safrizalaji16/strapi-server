import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsDescriptiveText extends Schema.Component {
  collectionName: 'components_about_us_descriptive_texts';
  info: {
    displayName: 'DescriptiveText';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface ProductTypes extends Schema.Component {
  collectionName: 'components_product_types_types';
  info: {
    displayName: 'type';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    images: Attribute.Media & Attribute.Required;
    status: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    sizes: Attribute.Relation<'product.types', 'oneToMany', 'api::size.size'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.descriptive-text': AboutUsDescriptiveText;
      'product.types': ProductTypes;
    }
  }
}
