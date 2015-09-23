/**
 * 
 */
Ext.define('wallet.view.LoginView',{
	alias: 'widget.loginview',
	extend: 'Ext.container.Container',
	layout: {
		type: 'border'
	},
	height: '100%',
	style: 'background-color: #FFFFFF;background:url(res/images/vz_logo.jpg) 50% 50%;',
	items: [{
		xtype: 'container',
		region: 'north',
		height: '40%'
	},{
		xtype: 'container',
		region: 'south',
		height: '40%'
	},{
		xtype: 'container',
		region: 'east',
		width: '30%'
	},{
		xtype: 'container',
		region: 'west',
		width: '30%'
	},{
		xtype: 'panel',
		title: 'Login',
		region: 'center',
		width: '100%',
		height: '100%',
		layout:{
			type: 'vbox',
			pack: 'center'
		},
		items:[{
			xtype: 'container',
			width: '100%',
			layout: {
				type: 'hbox',
				pack: 'center'
			},
			items: [{
				xtype: 'textfield',
				fieldLabel: '<font size="3px" style="font-weight:bold">Let\'s start by verifying your phone number</font>',
				labelSeparator: '',
				labelAlign: 'top',
				maskRe: /^[0-9\b]+$/,
				itemId: 'mdnText',
				enforceMaxLength: true,
				maxLength: 10,
				emptyText: 'Enter 10-digit mobile number'
			}]
		},{
			xtype: 'tbspacer',
			height: 10
		},{
			xtype: 'container',
			width: '100%',
			layout: {
				type: 'hbox',
				pack: 'center'
			},
			items: [{
				xtype: 'button',
				width: '20%',
				disabled: true,
				scale: 'medium',
				text: 'OK',
				itemId: 'okBtn'
			}]
		}]
	}]
});