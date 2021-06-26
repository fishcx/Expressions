function doGet(e) {
   
  var output= HtmlService
      .createTemplateFromFile('main.html')
      
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
  output.setTitle('Expressions');
  
  return output;
 
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}