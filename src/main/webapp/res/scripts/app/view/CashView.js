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
	style: 'background-color: #FFFFFF;background: url(res/images/Verizon_Logo.jpg)',
	items:[{
		xtype: 'panel',
		title: '<div class="redFont">Payments</div>',
		width: '75%',
		autoScroll: true,
		height: '75%',
		bodyPadding: 5,
		autoScroll: true,
		layout: {
			type: 'vbox',
			pack: 'center',
			align: 'middle'
		},
		items: [{
				xtype: 'container',
				width: '75%',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'radiofield',
					name: 'cashRadio',
					itemId: 'creditRadio',
					boxLabel: 'Credit Card'
				}]
			},{
				xtype: 'container',
				width: '75%',
				padding: '10 0 10 20',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'container',
					hidden: true,
					itemId: 'creditCardCnt',
					items: [{
						xtype: 'textfield',
						fieldLabel: 'Card Number',
						value: '4617-8654-0029-9627',
					},{
						xtype: 'textfield',
						fieldLabel: 'CVV',
						inputType: 'password',
						width: 140
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
				width: '75%',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'radiofield',
					name: 'cashRadio',
					itemId: 'debitRadio',
					boxLabel: 'Debit Card'
				}]
			},{
				xtype: 'container',
				width: '75%',
				padding: '10 0 10 20',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'container',
					itemId: 'debitCardCnt',
					hidden: true,
					items: [{
						xtype: 'textfield',
						fieldLabel: 'Card Number',
						value: '4617-8654-0029-9627',
					},{
						xtype: 'textfield',
						fieldLabel: 'CVV',
						inputType: 'password',
						width: 140
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
				width: '75%',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'radiofield',
					name: 'cashRadio',
					itemId: 'netBankingRadio',
					boxLabel: 'Net Banking'
				}]
			},{
				xtype: 'container',
				width: '75%',
				padding: '10 0 10 20',
				layout: {
					type: 'vbox',
					pack: 'start',
					align: 'left'
				},
				items: [{
					xtype: 'container',
					itemId: 'netBankingCnt',
					hidden: true,
					items: [{
							xtype: 'combobox',
							queryMode: 'local',
							store: ['Select Bank','ICICI Bank','HDFC Bank', 'Axis Bank'],
							value: 'Select Bank'
						}]
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
					itemId: 'cashGoBack',
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