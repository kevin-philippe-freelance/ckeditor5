/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import SlashCommand from '../src/slashcommand';
import SlashCommandEditing from '../src/slashcommandediting';
import SlashCommandUI from '../src/slashcommandui';

describe( 'SlashCommand', () => {
	it( 'should require SlashCommandEditing', () => {
		expect( SlashCommand.requires ).to.include( SlashCommandEditing );
	} );

	it( 'should require SlashCommandUI', () => {
		expect( SlashCommand.requires ).to.include( SlashCommandUI );
	} );

	it( 'should require Mention', () => {
		expect( SlashCommand.requires ).to.include( Mention );
	} );

	it( 'should have pluginName property', () => {
		expect( SlashCommand.pluginName ).to.equal( 'SlashCommand' );
	} );
} );
