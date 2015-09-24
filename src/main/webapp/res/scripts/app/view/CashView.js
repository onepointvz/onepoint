/**
 * 
 */
Ext.define('wallet.view.CashView',{
	alias: 'widget.cashview',
	extend: 'Ext.container.Container',
	layout: {
		type: 'hbox',
		pack: 'center',
		align: 'middle'
	},
	items:[{
		xtype: 'panel',
		title: '<div class="redFont">Login</div>',
		width: '50%',
		bodyPadding: 5,
		autoScroll: true,
		layout: {
			type: 'vbox',
			pack: 'start',
			align: 'center'
		},
		items: [{
				xtype: 'container',
				width: '50%',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'radiofield',
					name: 'cashRadio',
					boxLabel: 'Credit Card'
				}]
			},{
				xtype: 'container',
				width: '50%',
				padding: '10 0 10 20',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'container',
					itemdId: 'creditCardCnt',
					items: [{
						xtype: 'textfield',
						fieldLabel: 'Card Number',
						value: '4617-8654-0029-9627',
					},{
						xtype: 'textfield',
						fieldLabel: 'CVV',
						inputType: 'password',
						width: 130
					},{
						xtype: 'textfield',
						fieldLabel: 'Card Holder Name',
						value: 'Anthoni Lawrance A'
					},{
						xtype: 'fieldcontainer',
						fieldLabel: 'Expiry Date',
						layout: 'hbox',
						items:[{
							xtype: 'combobox',
							width: 75,
							queryMode: 'local',
							store: ['Month','1','2','3','4','5','6','7','8','9','10','12'],
							value: 'Month'
						},{
							xtype: 'tbspacer',
							width: 5
						},{
							xtype: 'combobox',
							queryMode: 'local',
							width: 70,
							store: ['Year','2015','2016'],
							value: 'Year'
						}]
					}]
				}]
			},{
				xtype: 'container',
				width: '50%',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'radiofield',
					name: 'cashRadio',
					boxLabel: 'Debit Card'
				}]
			},{
				xtype: 'container',
				width: '50%',
				padding: '10 0 10 20',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'container',
					itemdId: 'creditCardCnt',
					items: [{
						xtype: 'textfield',
						fieldLabel: 'Card Number',
						value: '4617-8654-0029-9627',
					},{
						xtype: 'textfield',
						fieldLabel: 'CVV',
						inputType: 'password',
						width: 130
					},{
						xtype: 'textfield',
						fieldLabel: 'Card Holder Name',
						value: 'Anthoni Lawrance A'
					},{
						xtype: 'fieldcontainer',
						fieldLabel: 'Expiry Date',
						layout: 'hbox',
						items:[{
							xtype: 'combobox',
							queryMode: 'local',
							width: 75,
							store: ['Month','1','2','3','4','5','6','7','8','9','10','12'],
							value: 'Month'
						},{
							xtype: 'tbspacer',
							width: 5
						},{
							xtype: 'combobox',
							queryMode: 'local',
							width: 70,
							store: ['Year','2015','2016'],
							value: 'Year'
						}]
					}]
				}]
			},{
				xtype: 'container',
				width: '50%',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'radiofield',
					name: 'cashRadio',
					boxLabel: 'Net Banking'
				}]
			},{
				xtype: 'tbspacer',
				height: 20
			},{
				xtype: 'container',
				width: '100%',
				layout: {
					type: 'hbox',
					pack: 'center',
					align: 'middle'
				},
				items: [{
					xtype: 'button',
					width: '20%',
					text: 'Back'
				},{
					xtype: 'tbspacer',
					width: '10%'
				},{
					xtype: 'button',
					width: '20%',
					text: 'Continue'
				}]
			},{
				xtype: 'container',
				padding: 10,
				width: '100%',
				layout: {
					type: 'hbox',
					pack: 'center',
					align: 'middle'
				},
				items: [{
					xtype: 'image',
					src: 'res/images/Payment_Card.png'
				}]
			}]
	}]
});