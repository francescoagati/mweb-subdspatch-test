import tink.core.Future;
import mweb.Dispatcher;
using thx.Functions;



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

class Main extends mweb.Route<Future<String>> {

  static function dispatch<T>(method,uri,obj:{},r:mweb.Route<T>) {
		var d = new mweb.Dispatcher(method,uri,obj);
		return d.dispatch(r);
	}



	public static function main() {

    var ret:Future<String> = dispatch('GET','hello/gina/pippo',{},new Main());
    ret.handle(function(s) trace(s));

		//var request = new mweb.http.webstd.Request(); // works for neko.Web and php.Web
		//var d = mweb.Dispatcher.createWithRequest(request);
		//var ret = d.dispatch(new HelloRoute());
		//Sys.print(ret);
	}

	public function anyHello(name:String,?d:Dispatcher<Future<String>>) {

    var sub_router = new Route2();
    var future = sub_router.trigger.asFuture();
    d.dispatch(sub_router);
    return future;
    //var trigger = Future.trigger();
		//trigger.trigger('<h1>Hello, $name!</h1>');
    //return trigger.asFuture();
	}
/*
	public function any():String
	{
		return '<p>Welcome to the first example of mweb!</p>' +
			'<p>In order to test it, change your browser location to point to <code>/hello/yourname</code> <a href="/hello/user">like this</a></p>';
	}

	private function willNotBeRoute():Void
	{
	}

	@:skip public function willNotBeRouteEither():Int
	{
		return 1;
	}
  */
}
