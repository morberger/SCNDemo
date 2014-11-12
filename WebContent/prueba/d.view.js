sap.ui.jsview("prueba.d", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf prueba.d
	*/ 
	getControllerName : function() {
		return "prueba.d";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf prueba.d
	*/ 
	createContent : function(oController) {
		return new sap.m.Page({
            title : "Prueba en movil ",
            content : [ new sap.m.Button({
                      text : "Mensaje",
                      tap : function() {
                                alert("Hola hector!!");
                      }
            }),  new sap.m.Button({
                text : "Mensaje 2",
                tap : function() {
                          alert("Hola daniel!!");
                }
      }) ]
  });
	}
});