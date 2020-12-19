
import {
  YO_FACTORY,
  HELLO_FACTORY,
  ToolsFactory,
  ExpressionFactory,
  MitchAllen,
} from 'https://cdn.jsdelivr.net/gh/mitchallen/x-script@0.1.4/dist/x-factory.modern.min.js'

const world = new THREE.Group();
world.name = 'demo';

YO_FACTORY.yo();

HELLO_FACTORY.hello('Yo World!');

ToolsFactory.hello();

ExpressionFactory.hello();

MitchAllen.NamespaceFactory.hello();


