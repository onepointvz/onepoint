/**
 * 
 */
Ext.define('wallet.view.DecisionView',{
	alias: 'widget.decisionview',
	extend: 'Ext.container.Container',
	layout: {
		type: 'hbox',
		pack: 'center',
		align: 'middle'
	},
	style: 'background-color: #FFFFFF;background: url(res/images/Verizon_Logo.jpg)',
	items:[{
		xtype: 'panel',
		title: '<div class="redFont">Actions</div>',
		autoScroll: true,
		style: 'overflow-x:hidden;overflow-y:auto;',
		width: '75%',
		height: '75%',
		bodyPadding: 5,
		layout: {
			type: 'vbox',
			pack: 'center',
			align: 'middle'
		},
		tools: [{
			type: 'mytool',
			width: 'auto',
			renderTpl: [
				'<img id="" src="res/images/Logout.png" role="presentation" height="15" width="15"/>'
			],
			handler: function() {
			}
		}],
		items: [{
			xtype: 'container',
			width: '30%',
			padding: '0 0 10 0',
			layout: {
				type: 'vbox',
				pack: 'start',
				align: 'left'
			},
			items: [{
				xtype: 'container',
				layout:{
					type: 'table',
					columns: 3
				},
				items:[{
						xtype: 'container',
						html: '<img src="./res/images/Load_Cash.jpg" height="50" width="50"/>'
					},{
						xtype: 'tbspacer',
						width: 10
					},{
						xtype: 'container',
						height: '100%',
						width: '100%',
						html: '<b><a href="javascript:void(0);" id="loadCash">Load Cash</a></b>'
				}]
			}]
		},{
			xtype: 'container',
			padding: '0 0 10 0',
			width: '30%',
			layout: {
				type: 'vbox',
				pack: 'start',
				align: 'left'
			},
			items: [{
				xtype: 'container',
				layout:{
					type: 'table',
					columns: 3
				},
				items:[{
					xtype: 'container',
					html: '<img src="./res/images/Payee.jpg" height="50" width="50"/>'
				},{
					xtype: 'tbspacer',
					width: 10
				},{
					xtype: 'container',
					height: '100%',
					width: '100%',
					html: '<b><a href="javascript:void(0);" id="addPayee">Add Payee</a></b>'
				}]
			}]
		},{
			xtype: 'container',
			padding: '0 0 10 0',
			width: '30%',
			layout: {
				type: 'vbox',
				pack: 'start',
				align: 'left'
			},
			items: [{
				xtype: 'container',
				layout:{
					type: 'table',
					columns: 3
				},
				items:[{
					xtype: 'container',
					html: '<img src="./res/images/Money_Transfer.jpg" height="50" width="50"/>'
				},{
					xtype: 'tbspacer',
					width: 10
				},{
					xtype: 'container',
					height: '100%',
					width: '100%',
					html: '<b>Transfer Money /Bill Pay</b>'
				}]
			}]
		},{
			xtype: 'container',
			width: '30%',
			layout: {
				type: 'vbox',
				pack: 'start',
				align: 'left'
			},
			items: [{
				xtype: 'container',
				layout:{
					type: 'table',
					columns: 3
				},
				items:[{
					xtype: 'container',
					html: '<img src="./res/images/Loyalty_Offers.jpg" height="50" width="50"/>'
				},{
					xtype: 'tbspacer',
					width: 10
				},{
					xtype: 'container',
					height: '100%',
					width: '100%',
					html: '<b>Loyalty Offers</b>'
				}]
			}]
		}]
	}]
});