import type { Schema, Attribute } from '@strapi/strapi';

export interface ClassicDateComponent extends Schema.Component {
  collectionName: 'components_classic_date_components';
  info: {
    displayName: 'DateComponentClassic';
    icon: 'clock';
    description: '';
  };
  attributes: {
    date: Attribute.Date & Attribute.Required;
  };
}

export interface CustomDateComponent extends Schema.Component {
  collectionName: 'components_custom_date_components';
  info: {
    displayName: 'DateComponentCustom';
    icon: 'clock';
    description: '';
  };
  attributes: {
    day: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 31;
      }>;
    month: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 12;
      }>;
    year: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        max: 3000;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'classic.date-component': ClassicDateComponent;
      'custom.date-component': CustomDateComponent;
    }
  }
}
