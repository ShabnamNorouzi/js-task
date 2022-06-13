var test = (function () {
  var $elems = { 
      product: null, 
      heading: null, 
      description: null, 
      features: null 
  },
  selectors = {
      product: 'product',
      productHeading: 'product__heading',
      productDescription: 'product__description',
      features: 'features',
      featureItem: 'features__item',
      dataFeatureId: 'data-feature-id',
  };
  return {
    init: function (headingText, descriptionText, features) {
      if (
        (($elems.product = document.querySelector('.' + selectors.product)),
        ($elems.heading = $elems.product.querySelector('.' + selectors.productHeading)),
        ($elems.description = $elems.product.querySelector('.' + selectors.productDescription)),
        ($elems.features = $elems.product.querySelector('.' + selectors.features)),
        void 0 !== $elems.heading && null != $elems.heading &&
        void 0 !== headingText && null != headingText && ($elems.heading.textContent = headingText),
        void 0 !== $elems.description && null != $elems.description &&
        void 0 !== descriptionText && null != descriptionText)
      ){
        var i = document.createElement('p'),
        textNode = document.createTextNode(descriptionText);
        i.appendChild(textNode), $elems.description.appendChild(i);
      }
      if (
        void 0 !== $elems.features && null != $elems.features &&
        void 0 !== features && null != features
      ){
      for (var j = document.createElement('ul'), i = 0; i < features.length; i++)
        if (void 0 !== features[i].text && null != features[i].text) {
          var $listItem = document.createElement('li'),
          textNode = document.createTextNode(features[i].text);
          $listItem.classList.add(selectors.featureItem),
          void 0 !== features[i].id && null != features[i].id && $listItem.setAttribute(selectors.dataFeatureId, features[i].id),
          $listItem.appendChild(textNode),
          j.appendChild($listItem);
        }
        a.features.appendChild(j);
      }
    },
    getHeadingText: function () {
      return void 0 !== $elems.heading && null != $elems.heading
      ? $elems.heading.textContent
      : null;
    },
    hasFeature: function ($listItem) {
    if (void 0 !== $elems.features && null != $elems.features) {
      for (
        var i = $elems.features.querySelectorAll('.' + selectors.featureItem), features = 0;
        features < i.length;
        features++
      )
      if (
        i[features].hasAttribute(selectors.dataFeatureId) &&
        i[features].getAttribute(selectors.dataFeatureId) == $listItem
      )
        return !0;
    }
      return !1;
    },
  };
})();