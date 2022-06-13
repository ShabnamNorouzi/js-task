// Old Code & line by line explanation

var test = (function test(){
  var $elems = {
      product: null,
      heading: null,
      description: null,
      features: null
  };
  var selectors = {
      product: 'product',
      productHeading: 'product__heading',
      productDescription: 'product__description',
      features: 'features',
      featureItem: 'features__item',
      dataFeatureId: 'data-feature-id'
  };
  return {
      init: init,
      getHeadingText: function getHeadingText(){
          if(typeof $elems.heading != 'undefined' && $elems.heading != null){
              return $elems.heading.textContent;
          }
          return null;
      },
      hasFeature: function hasFeature(featureId){
          if(typeof $elems.features != 'undefined' && $elems.features != null){
              var featureListItems = $elems.features.querySelectorAll('.'+selectors.featureItem);
              for(var i = 0; i < featureListItems.length; i++){
                  if(!featureListItems[i].hasAttribute(selectors.dataFeatureId))
                      continue;              
                  var foundFeatureId = featureListItems[i].getAttribute(selectors.dataFeatureId);
                  if(foundFeatureId == featureId){
                      return true;
                  }
              }
          }
          return false;
      }
  };

// init() function with three headingText, descriptionText, features parameters
  function init(headingText, descriptionText, features){

    //$elems.product  which is the product object inside the $elems property declared equal to the first element within the document that matches with the product  class name.
      $elems.product = document.querySelector('.'+selectors.product);

    //$elems.heading which is the heading object inside the $elems property declared equal to the first element within the first element within the document that matches with the product__heading  class name.
      $elems.heading = $elems.product.querySelector('.'+selectors.productHeading);

    // $elems.description which is the description object inside the $elems property declared equal to the first element within the first element within the document that matches with the product__description  class name.
      $elems.description = $elems.product.querySelector('.'+selectors.productDescription);

    // $elems.description which is the description object inside the $elems property declared equal to the first element within the first element within the document that matches with the features class name.
      $elems.features = $elems.product.querySelector('.'+selectors.features);

    // using typeof in if statement to check if a variable in $elems.heading  is not undefined and null also
      if(typeof $elems.heading != 'undefined' && $elems.heading != null &&

    // and using typeof in if statement to check if a variable in headingText  is not undefined and null
         typeof headingText != 'undefined' && headingText != null){

    // Then the  $elems.heading.textContent would be equals to headingText
          $elems.heading.textContent = headingText;
      }

    // using typeof in if statement to check if a variable in $elems.description  is not undefined and null also
      if(typeof $elems.description != 'undefined' && $elems.description != null &&

    // using typeof in if statement to check if a variable in descriptionText  is not undefined and null
         typeof descriptionText != 'undefined' && descriptionText != null){

    // Then using document.createElement() method creates a new <p> element (new paragraph) and call it $newP  
          var $newP = document.createElement("p");

    // using document.createTextNode(descriptionText) which creates a new text node for descriptionText and call it textNode as a variable
          var textNode = document.createTextNode(descriptionText);
    
    // using appendChild() method allows to add the textNode as a new node to the end of the $newP 
          $newP.appendChild(textNode);

    // again adding the $newP to the end of the $elems.description .$elems.description.appendChild($newP);
          $elems.description.appendChild($newP);
      } 
      
    // using typeof in if statement to check if a variable in $elems.features  is not undefined and null also
      if(typeof $elems.features != 'undefined' && $elems.features != null &&

    // using typeof in if statement to check if a variable in features is not undefined and null
         typeof features != 'undefined' && features != null){

    // Then using document.createElement() method creates a new <ul> element (new unordered List element) and call it $list  
          var $list = document.createElement("ul");

    // It’s a loop for i variable between 0 and features.length
          for(var i = 0; i < features.length; i++){

    // using typeof in if statement to check if a variables in features[i].text are not undefined or null
              if(typeof features[i].text == 'undefined' || features[i].text == null)

    // then keep continue in the loop
                  continue;

    // then using document.createElement() method creates a new <li> element (new list item element) and call it $listItem 
              var $listItem = document.createElement("li");

    // using document.createTextNode((features[i].text) which creates a new text node for descriptionText and call it textNode as a variable
              var textNode = document.createTextNode(features[i].text);

    // use the classList API to add features__item class to the $listItem    
              $listItem.classList.add(selectors.featureItem);

    // using typeof in if statement to check if a variable in features[i].id  is not undefined and null
              if(typeof features[i].id != 'undefined' && features[i].id != null){

    // then the first call to setAttribute() shows changing the name attribute from selectors.dataFeatureId value to features[i].id.
                  $listItem.setAttribute(selectors.dataFeatureId, features[i].id);
              }  
              
    // using appendChild() method allows to add the textNode as a new node to the end of the $listItem 
              $listItem.appendChild(textNode);

    // again using appendChild() method allows to add the $listItem as a new node to the end of the $list
              $list.appendChild($listItem);         
          }
         
    // returns appendChild() method that allows to add the $list as a new node to the end of the $elems.features 
          $elems.features.appendChild($list);
      }

  }
})();