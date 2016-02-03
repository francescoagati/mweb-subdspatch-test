import tink.core.Future;
typedef FPlayer = Future<{name:String,surname:String}>

@:forward
abstract Player(FPlayer) {
  public inline function new(future:FPlayer) this = future;

  @:from public static inline function from_string(id:String)
     return new Player(Future.sync({name:'mario',surname:'rossi'}));
}
