import tink.core.Future;
import mweb.Dispatcher;
using thx.Functions;



@:keep
class Route2 extends mweb.Route<Future<String>> {

  @:skip
  public var trigger:tink.core.Future.FutureTrigger<String> = Future.trigger();

  public function any() {
    trigger.trigger('any');
    return null;
  }

  public function anyPippo() {
    trigger.trigger('ciuppa');
    return null;
  }
}


@:keep
class Main extends mweb.Route<Future<String>> {

  	static function dispatch<T>(method,uri,obj:{},r:mweb.Route<T>) {
		var d = new mweb.Dispatcher(method,uri,obj);
		return d.dispatch(r);
	}



	public static function main() {

	//    var ret:Future<String> = dispatch('GET','hello/gina/pippo',{},new Main());
	    var ret:Future<String> = dispatch('GET','player/5',{},new Main());
	    ret.handle(function(s) trace(s));


	}

	public function anyPlayer(player_id:Player) {
	   player_id.handle(function(x) trace(x.name));
	   return Future.sync('ciaone');
	}

	public function anyHello(name:String,?d:Dispatcher<Future<String>>) {
	    var sub_router = new Route2();
	    var future = sub_router.trigger.asFuture();
	    d.dispatch(sub_router);
	    return future;
	}

}
