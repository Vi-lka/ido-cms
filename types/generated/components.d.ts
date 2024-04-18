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
      Attribute.SetMinMax<
        {
          min: 1;
          max: 31;
        },
        number
      >;
    month: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 12;
        },
        number
      >;
    year: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 3000;
        },
        number
      >;
  };
}

export interface CustomDescription extends Schema.Component {
  collectionName: 'components_custom_descriptions';
  info: {
    displayName: 'Description';
    icon: 'question';
    description: '';
  };
  attributes: {
    short: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 1000;
      }>;
    full: Attribute.RichText;
  };
}

export interface CustomFileItem extends Schema.Component {
  collectionName: 'components_custom_file_items';
  info: {
    displayName: 'FileItem';
    icon: 'attachment';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    file: Attribute.Media & Attribute.Required;
  };
}

export interface CustomFilesList extends Schema.Component {
  collectionName: 'components_custom_files_lists';
  info: {
    displayName: 'FilesList';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    list: Attribute.Component<'custom.file-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface CustomRichText extends Schema.Component {
  collectionName: 'components_custom_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'medium';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    text: Attribute.RichText;
  };
}

export interface CustomSlider extends Schema.Component {
  collectionName: 'components_custom_sliders';
  info: {
    displayName: 'Slider';
    icon: 'landscape';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    images: Attribute.Media & Attribute.Required;
  };
}

export interface CustomVideoEmbed extends Schema.Component {
  collectionName: 'components_custom_video_embeds';
  info: {
    displayName: 'VideoEmbed';
    icon: 'cast';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    embed: Attribute.Text & Attribute.Required;
  };
}

export interface CustomVideo extends Schema.Component {
  collectionName: 'components_custom_videos';
  info: {
    displayName: 'Video';
    icon: 'slideshow';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    video: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'classic.date-component': ClassicDateComponent;
      'custom.date-component': CustomDateComponent;
      'custom.description': CustomDescription;
      'custom.file-item': CustomFileItem;
      'custom.files-list': CustomFilesList;
      'custom.rich-text': CustomRichText;
      'custom.slider': CustomSlider;
      'custom.video-embed': CustomVideoEmbed;
      'custom.video': CustomVideo;
    }
  }
}
