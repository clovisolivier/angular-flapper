# angular-flapper.js

### Angular-flapper replicates the split-flap displays

This is a directive wrapper of the original jQuery plugin which can be found here: https://github.com/jayKayEss/Flapper.

### Install and Inclusion

As jQuery plugin wrapper, flapper need to be install

Requirements : `bower install flapper`

Add following code in your index.html

```html
<!-- import flapper css style  -->
<link href="bower_components/flapper/css/flapper.css" type="text/css" rel="stylesheet" />

<!-- import flapper jquery  -->
<script src="bower_components/flapper/src/jquery.flapper.js"></script>
```

Next grab angular-flapper with bower : `bower install angular-flapper`

Add following code in your index.html

```html
<!-- import flapper jquery  -->
<script src="bower_components/angular-flapper/dist/ng-flapper.js"></script>
```

Include it in your AngularJS application

```var myApp = angular.module('myApp', ['angular-flapper']);```

### Implementation

```html
<!-- basic implementation -->
<div flapper ng-model="value"  />

<!-- animated implementation -->
<div flapper-repeat ng-model="value"  />

<!-- setting style -->
<div flapper class="slow dark M" ng-model="value"  />

<!-- setting a flapper number -->
<div flapper class="slow dark M" ng-model="value" nb-flap=12 />

<!-- setting a flapper type -->
<div flapper class="slow dark M" ng-model="value" type='num' />

<!-- setting a flapper align -->
<div flapper class="slow dark M" ng-model="value" align='left' />

<!-- maximum timing for digit animation -->
<div flapper class="slow dark M" ng-model="value" timing=250 />

<!-- minimum timing for digit animation -->
<div flapper class="slow dark M" ng-model="value" mintiming=250 />

```

### Theming

For more information, please, see https://github.com/jayKayEss/Flapper.

### Release notes

See CHANGELOG.md for a summary of changes.