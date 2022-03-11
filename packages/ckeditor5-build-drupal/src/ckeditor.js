/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';

export default class DrupalEditor extends ClassicEditorBase {}

// Plugins to include in the build.
DrupalEditor.builtinPlugins = [
	AutoImage,
	AutoLink,
	Bold,
	Essentials,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	Italic,
	Link,
	LinkImage,
	List,
	Paragraph,
	Underline
];

// Editor configuration.
DrupalEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'link',
			'|',
			'bulletedList',
			'numberedList'
		]
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'linkImage',
			'|',
			'toggleImageCaption',
			'imageTextAlternative'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
