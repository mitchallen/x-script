
// non-exports for CDN distribution

const YO_FACTORY = {
  yo: function(ctx) {
    ctx = ctx || {};
    var message = ctx.message || "Hello World!";
    console.log(`[yo] ${message}`);
  }
}

class HELLO_FACTORY {

  static hello(ctx) {
    ctx = ctx || {};
    var message = ctx.message || "Hello World!";
    console.log(`[hello] ${message}`);
  }

}

class ToolsFactory {
  static hello(ctx) {
    ctx = ctx || {};
    var message = ctx.message || "Hello Tools!";
    console.log(`[tools] ${message}`);
  }
}

// using a class expression

let ExpressionFactory = class  {
  static hello(ctx) {
    ctx = ctx || {};
    var message = ctx.message || "Hello Expression!";
    console.log(`[expression] ${message}`);
  }
}

let MitchAllen = {}

MitchAllen.NamespaceFactory = class  {
  static hello(ctx) {
    ctx = ctx || {};
    var message = ctx.message || "Hello Namespace!";
    console.log(`[namespace] ${message}`);
  }
}

