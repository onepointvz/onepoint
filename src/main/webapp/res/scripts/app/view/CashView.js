/**
 * 
 */
Ext.define('wallet.view.CashView',{
	alias: 'widget.cashview',
	extend: 'Ext.container.Container',
	height: '100%',
	layout: 'border',
	style: 'background-color: #FFFFFF;background: url(res/images/Verizon_Logo.jpg)',
	items:[{
		xtype: 'container',
		region: 'north',
		height: '27%'
	},{
		xtype: 'container',
		region: 'south',
		height: '20%'
	},{
		xtype: 'container',
		region: 'east',
		width: '37%'
	},{
		xtype: 'container',
		region: 'west',
		width: '40%'
	},{
		xtype: 'panel',
		title: '<div class="redFont">Payment Options</div>',
		tools: [{
			type: 'mytool',
			width: 'auto',
			renderTpl: [
				'<img id="" src="res/images/Logout.png" role="presentation" height="15" width="15"/>'
			],
			handler: function() {
			}
		}],
		region: 'center',
		width: '100%',
		height: '100%',
		layout: {
			type: 'vbox',
			pack: 'center'
		},
		defaults:{
			padding: '0 0 10 50'
		},
		items: [{
			xtype: 'container',
			width: '100%',
			layout: {
				type: 'table',
				columns: 1
			},
			items:[{
				xtype: 'radiofield',
				name: 'cashRadio',
				boxLabel: 'Credit Card'
			}]
		},{
			xtype: 'container',
			width: '100%',
			layout: {
				type: 'table',
				columns: 1
			},
			items:[{
				xtype: 'radiofield',
				name: 'cashRadio',
				boxLabel: 'Debit Card'
			}]
		},{
			xtype: 'container',
			width: '100%',
			layout: {
				type: 'table',
				columns: 1
			},
			items:[{
				xtype: 'radiofield',
				name: 'cashRadio',
				boxLabel: 'Net Banking'
			}]
		},{
			xtype: 'container',
			width: '100%',
			padding: '0 0 10 0',
			layout: {
				type: 'hbox',
				pack: 'center'
			},
			items:[{
				xtype: 'button',
				scale: 'medium',
				itemId: 'cashGoBack',
				text: 'Back'
			},{
				xtype: 'tbspacer',
				width: 10
			},{
				xtype: 'button',
				scale: 'medium',
				text: 'Proceed'
			}]
		}]
	}]
});