## [BEM规范](https://en.bem.info/methodology/key-concepts/)
在读element-ui源码时，发现了这样的一个规范，感觉可以用在项目里面，以提高效率与优化体积作用。
BEM严格命名规则查看[这里](http://getbem.com/naming/)

## BEM规范在Element-ui中实现

### Block（块）
```scss
 @mixin b($block) {
  // !global声明为全局变量
  $B: $namespace+'-'+$block !global;
  // #{}为变量的值
  .#{$B} {
    // 获取传入的内容
    @content;
  }
}
```
### Element（元素）
```scss
@mixin e($element) {
  $E: $element !global;
  $selector: &;
  $currentSelector: "";
  // 遍历其中的值
  @each $unit in $element {
    $currentSelector: #{$currentSelector + "." + $B + $element-separator + $unit + ","};
  }
  // 如果是特殊的网结构，详细看function.scss
  @if hitAllSpecialNestRule($selector) {
    // 放置到最外层
    @at-root {
      #{$selector} {
        #{$currentSelector} {
          @content;
        }
      }
    }
  } @else {
    @at-root {
      #{$currentSelector} {
        @content;
      }
    }
  }
}
```
### 和Modifier（修饰符）
```scss
@mixin m($modifier) {
  $selector: &;
  $currentSelector: "";
  @each $unit in $modifier {
    $currentSelector: #{$currentSelector + & + $modifier-separator + $unit + ","};
  }

  @at-root {
    #{$currentSelector} {
      @content;
    }
  }
}
```