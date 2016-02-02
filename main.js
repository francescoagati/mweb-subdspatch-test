(function (console, $global) { "use strict";
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var mweb_Route = function() {
};
$hxClasses["mweb.Route"] = mweb_Route;
mweb_Route.__name__ = true;
mweb_Route.prototype = {
	_getDispatchData: function() {
		throw new js__$Boot_HaxeError("Not Implemented");
	}
	,_getSubject: function() {
		return this;
	}
	,_getMapFunction: function() {
		return null;
	}
	,__class__: mweb_Route
};
var mweb_internal_DispatchData = $hxClasses["mweb.internal.DispatchData"] = { __ename__ : true, __constructs__ : ["RouteObj","RouteFunc","RouteCall"] };
mweb_internal_DispatchData.RouteObj = function(data) { var $x = ["RouteObj",0,data]; $x.__enum__ = mweb_internal_DispatchData; $x.toString = $estr; return $x; };
mweb_internal_DispatchData.RouteFunc = function(def) { var $x = ["RouteFunc",1,def]; $x.__enum__ = mweb_internal_DispatchData; $x.toString = $estr; return $x; };
mweb_internal_DispatchData.RouteCall = ["RouteCall",2];
mweb_internal_DispatchData.RouteCall.toString = $estr;
mweb_internal_DispatchData.RouteCall.__enum__ = mweb_internal_DispatchData;
var Route2 = function() {
	this.trigger = new tink_core_FutureTrigger();
	mweb_Route.call(this);
};
$hxClasses["Route2"] = Route2;
Route2.__name__ = true;
Route2.__super__ = mweb_Route;
Route2.prototype = $extend(mweb_Route.prototype,{
	any: function() {
		var _this = this.trigger;
		if(_this.list == null) {
		} else {
			var list = _this.list;
			_this.list = null;
			_this.result = "any";
			tink_core__$Callback_CallbackList_$Impl_$.invoke(list,"any");
			tink_core__$Callback_CallbackList_$Impl_$.clear(list);
		}
		return null;
	}
	,anyPippo: function() {
		var _this = this.trigger;
		if(_this.list == null) {
		} else {
			var list = _this.list;
			_this.list = null;
			_this.result = "ciuppa";
			tink_core__$Callback_CallbackList_$Impl_$.invoke(list,"ciuppa");
			tink_core__$Callback_CallbackList_$Impl_$.clear(list);
		}
		return null;
	}
	,_getDispatchData: function() {
		return Route2._dispatchDataCache;
	}
	,__class__: Route2
});
var Main = function() {
	mweb_Route.call(this);
};
$hxClasses["Main"] = Main;
Main.__name__ = true;
Main.dispatch = function(method,uri,obj,r) {
	var tmp;
	var c = obj;
	tmp = function() {
		return c;
	};
	var d = new mweb_Dispatcher(method,uri,tmp);
	return d.dispatch(r);
};
Main.main = function() {
	var tmp;
	var str = "GET".toLowerCase();
	tmp = str;
	var ret = Main.dispatch(tmp,"hello/gina/pippo",{ },new Main());
	ret(function(s) {
		console.log(s);
	});
};
Main.__super__ = mweb_Route;
Main.prototype = $extend(mweb_Route.prototype,{
	anyHello: function(name,d) {
		var sub_router = new Route2();
		var future = sub_router.trigger.future;
		d.dispatch(sub_router);
		return future;
	}
	,_getDispatchData: function() {
		return Main._dispatchDataCache;
	}
	,__class__: Main
});
Math.__name__ = true;
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return null;
	}
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = true;
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = true;
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw new js__$Boot_HaxeError("No such constructor " + constr);
	if(Reflect.isFunction(f)) {
		if(params == null) throw new js__$Boot_HaxeError("Constructor " + constr + " need parameters");
		var tmp;
		var func = f;
		tmp = func.apply(e,params);
		return tmp;
	}
	if(params != null && params.length != 0) throw new js__$Boot_HaxeError("Constructor " + constr + " does not need parameters");
	return f;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = true;
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
$hxClasses["haxe._Int64.___Int64"] = haxe__$Int64__$_$_$Int64;
haxe__$Int64__$_$_$Int64.__name__ = true;
haxe__$Int64__$_$_$Int64.prototype = {
	__class__: haxe__$Int64__$_$_$Int64
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		return this.rh == null?null:this.rh["$" + key];
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_Error = $hxClasses["haxe.io.Error"] = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
var haxe_io_FPHelper = function() { };
$hxClasses["haxe.io.FPHelper"] = haxe_io_FPHelper;
haxe_io_FPHelper.__name__ = true;
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) return 0.0;
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) return 0;
	var af = f < 0?-f:f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) exp = -127; else if(exp > 128) exp = 128;
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608) & 8388607;
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	var sign = 1 - (high >>> 31 << 1);
	var exp = (high >> 20 & 2047) - 1023;
	var sig = (high & 1048575) * 4294967296. + (low >>> 31) * 2147483648. + (low & 2147483647);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	if(v == 0) {
		i64.low = 0;
		i64.high = 0;
	} else {
		var av = v < 0?-v:v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var tmp;
		var v1 = (av / Math.pow(2,exp) - 1) * 4503599627370496.;
		tmp = Math.round(v1);
		var sig = tmp;
		var sig_l = sig | 0;
		var sig_h = sig / 4294967296.0 | 0;
		i64.low = sig_l;
		i64.high = (v < 0?-2147483648:0) | exp + 1023 << 20 | sig_h;
	}
	return i64;
};
var haxe_rtti_Meta = function() { };
$hxClasses["haxe.rtti.Meta"] = haxe_rtti_Meta;
haxe_rtti_Meta.__name__ = true;
haxe_rtti_Meta.getType = function(t) {
	var meta = haxe_rtti_Meta.getMeta(t);
	return meta == null || meta.obj == null?{ }:meta.obj;
};
haxe_rtti_Meta.getMeta = function(t) {
	return t.__meta__;
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
$hxClasses["js._Boot.HaxeError"] = js__$Boot_HaxeError;
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
$hxClasses["js.html.compat.ArrayBuffer"] = js_html_compat_ArrayBuffer;
js_html_compat_ArrayBuffer.__name__ = true;
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_DataView = function(buffer,byteOffset,byteLength) {
	this.buf = buffer;
	this.offset = byteOffset == null?0:byteOffset;
	this.length = byteLength == null?buffer.byteLength - this.offset:byteLength;
	if(this.offset < 0 || this.length < 0 || this.offset + this.length > buffer.byteLength) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
};
$hxClasses["js.html.compat.DataView"] = js_html_compat_DataView;
js_html_compat_DataView.__name__ = true;
js_html_compat_DataView.prototype = {
	getInt8: function(byteOffset) {
		var v = this.buf.a[this.offset + byteOffset];
		return v >= 128?v - 256:v;
	}
	,getUint8: function(byteOffset) {
		return this.buf.a[this.offset + byteOffset];
	}
	,getInt16: function(byteOffset,littleEndian) {
		var v = this.getUint16(byteOffset,littleEndian);
		return v >= 32768?v - 65536:v;
	}
	,getUint16: function(byteOffset,littleEndian) {
		return littleEndian?this.buf.a[this.offset + byteOffset] | this.buf.a[this.offset + byteOffset + 1] << 8:this.buf.a[this.offset + byteOffset] << 8 | this.buf.a[this.offset + byteOffset + 1];
	}
	,getInt32: function(byteOffset,littleEndian) {
		var p = this.offset + byteOffset;
		var a = this.buf.a[p++];
		var b = this.buf.a[p++];
		var c = this.buf.a[p++];
		var d = this.buf.a[p++];
		return littleEndian?a | b << 8 | c << 16 | d << 24:d | c << 8 | b << 16 | a << 24;
	}
	,getUint32: function(byteOffset,littleEndian) {
		var v = this.getInt32(byteOffset,littleEndian);
		return v < 0?v + 4294967296.:v;
	}
	,getFloat32: function(byteOffset,littleEndian) {
		return haxe_io_FPHelper.i32ToFloat(this.getInt32(byteOffset,littleEndian));
	}
	,getFloat64: function(byteOffset,littleEndian) {
		var a = this.getInt32(byteOffset,littleEndian);
		var b = this.getInt32(byteOffset + 4,littleEndian);
		return haxe_io_FPHelper.i64ToDouble(littleEndian?a:b,littleEndian?b:a);
	}
	,setInt8: function(byteOffset,value) {
		this.buf.a[byteOffset + this.offset] = value < 0?value + 128 & 255:value & 255;
	}
	,setUint8: function(byteOffset,value) {
		this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setInt16: function(byteOffset,value,littleEndian) {
		this.setUint16(byteOffset,value < 0?value + 65536:value,littleEndian);
	}
	,setUint16: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
		} else {
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p] = value & 255;
		}
	}
	,setInt32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,value,littleEndian);
	}
	,setUint32: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p++] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >>> 24;
		} else {
			this.buf.a[p++] = value >>> 24;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value & 255;
		}
	}
	,setFloat32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,haxe_io_FPHelper.floatToI32(value),littleEndian);
	}
	,setFloat64: function(byteOffset,value,littleEndian) {
		var i64 = haxe_io_FPHelper.doubleToI64(value);
		if(littleEndian) {
			this.setUint32(byteOffset,i64.low);
			this.setUint32(byteOffset,i64.high);
		} else {
			this.setUint32(byteOffset,i64.high);
			this.setUint32(byteOffset,i64.low);
		}
	}
	,__class__: js_html_compat_DataView
};
var js_html_compat_Uint8Array = function() { };
$hxClasses["js.html.compat.Uint8Array"] = js_html_compat_Uint8Array;
js_html_compat_Uint8Array.__name__ = true;
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g = 0;
		while(_g < arg1) {
			var i = _g++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) offset = 0;
		if(length == null) length = buffer.byteLength - offset;
		if(offset == 0) arr = buffer.a; else arr = buffer.a.slice(offset,offset + length);
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	var t = this;
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			t[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			t[i1 + offset] = a1[i1];
		}
	} else throw new js__$Boot_HaxeError("TODO");
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var t = this;
	var a = js_html_compat_Uint8Array._new(t.slice(start,end));
	a.byteOffset = start;
	return a;
};
var mweb_Decoder = function() {
	this.data = new haxe_ds_StringMap();
	this.initFromMetas();
};
$hxClasses["mweb.Decoder"] = mweb_Decoder;
mweb_Decoder.__name__ = true;
mweb_Decoder.get_current = function() {
	return mweb_Decoder.current == null?mweb_Decoder.current = new mweb_Decoder():mweb_Decoder.current;
};
mweb_Decoder.prototype = {
	initFromMetas: function() {
		var meta = haxe_rtti_Meta.getType(mweb_Decoder);
		if(meta != null && meta.abstractDefs != null) {
			var dec = this.data;
			var defs = meta.abstractDefs;
			var _g = 0;
			while(_g < defs.length) {
				var def = defs[_g];
				++_g;
				var name = def;
				var cls = Type.resolveClass("mweb.decoders." + StringTools.replace(name,".","_") + "__");
				if(cls != null) {
					var v = Reflect.field(cls,"data");
					var _this = this.data;
					if(__map_reserved[name] != null) _this.setReserved(name,v); else _this.h[name] = v;
					v;
				} else console.log("WARNING: Type " + name + " was included in build, but the helper class was not found. Perhaps it was eliminated by DCE?");
			}
		}
	}
	,getData: function(typeName,toCreate) {
		if(toCreate == null) toCreate = true;
		var tmp;
		var _this = this.data;
		if(__map_reserved[typeName] != null) tmp = _this.getReserved(typeName); else tmp = _this.h[typeName];
		var data = tmp;
		if(data == null) {
			var cls = Type.resolveClass(typeName);
			if(cls == null) cls = Type.resolveEnum(typeName);
			if(cls == null) throw new js__$Boot_HaxeError(mweb_DecoderError.TypeNotFound(typeName));
			var found = false;
			var d = { };
			var f = Reflect.field(cls,"fromString");
			if(f != null) {
				found = true;
				d.fromString = f;
			}
			var f1 = Reflect.field(cls,"fromInt");
			if(f1 != null) {
				found = true;
				d.fromInt = f1;
			}
			var f2 = Reflect.field(cls,"fromFloat");
			if(f2 != null) {
				found = true;
				d.fromFloat = f2;
			}
			var f3 = Reflect.field(cls,"fromArray");
			if(f3 != null) {
				found = true;
				d.fromArray = f3;
			}
			var f4 = Reflect.field(cls,"fromDynamic");
			if(f4 != null) {
				found = true;
				d.fromDynamic = f4;
			}
			if(!found && !toCreate) try {
				var ens = Type.getEnumConstructs(cls);
				if(ens != null) {
					var tmp1;
					var _g = new haxe_ds_StringMap();
					var _g1 = 0;
					while(_g1 < ens.length) {
						var e = ens[_g1];
						++_g1;
						var key = e.toLowerCase();
						var value = Type.createEnum(cls,e);
						if(__map_reserved[key] != null) _g.setReserved(key,value); else _g.h[key] = value;
					}
					tmp1 = _g;
					var ensMap = tmp1;
					d.fromString = function(s) {
						var tmp3;
						var key1 = s.toLowerCase();
						tmp3 = __map_reserved[key1] != null?ensMap.getReserved(key1):ensMap.h[key1];
						return tmp3;
					};
					var tmp2;
					var _g11 = [];
					var _g2 = 0;
					while(_g2 < ens.length) {
						var e1 = ens[_g2];
						++_g2;
						_g11.push(Type.createEnum(cls,e1));
					}
					tmp2 = _g11;
					var ensArray = tmp2;
					d.fromInt = function(i) {
						return ensArray[i];
					};
					found = true;
				}
			} catch( e2 ) {
				if (e2 instanceof js__$Boot_HaxeError) e2 = e2.val;
			}
			var v = data = d;
			var _this1 = this.data;
			if(__map_reserved[typeName] != null) _this1.setReserved(typeName,v); else _this1.h[typeName] = v;
			v;
		}
		return data;
	}
	,decode: function(typeName,obj) {
		switch(typeName) {
		case "Int":
			if(((obj | 0) === obj)) return obj;
			if(typeof(obj) == "string") return Std.parseInt(obj);
			return null;
		case "Float":
			if(typeof(obj) == "number") return obj;
			if(typeof(obj) == "string") {
				var tmp;
				var x = obj;
				tmp = parseFloat(x);
				var ret = tmp;
				if(isNaN(ret)) return null;
				return ret;
			}
			return null;
		case "String":
			if(typeof(obj) == "string") return obj;
			if(obj == null) return null;
			return Std.string(obj);
		case "Bool":
			if(typeof(obj) == "boolean") return obj;
			if(obj == null) return false;
			var tmp1;
			var _g = Std.string(obj);
			switch(_g) {
			case "1":case "true":case "yes":
				tmp1 = true;
				break;
			case "0":case "false":case "no":
				tmp1 = false;
				break;
			default:
				tmp1 = null;
			}
			return tmp1;
		}
		var data = this.getData(typeName,false);
		if(typeof(obj) == "number") {
			if(data.fromInt != null && ((obj | 0) === obj)) return data.fromInt(obj);
			if(data.fromFloat != null) return data.fromFloat(obj);
		} else if(data.fromString != null && (obj == null || typeof(obj) == "string")) return data.fromString(obj); else if(data.fromArray != null && (obj == null || (obj instanceof Array) && obj.__enum__ == null)) return data.fromArray(obj);
		if(data.fromDynamic != null) return data.fromDynamic(obj);
		if(data.fromString != null) return data.fromString(Std.string(obj));
		throw new js__$Boot_HaxeError(mweb_DecoderError.DecoderNotFound(typeName));
	}
	,__class__: mweb_Decoder
};
var mweb_Dispatcher = function(method,uri,lazyParameters) {
	this.pieces = mweb_Dispatcher.splitUri(uri);
	this.verb = method;
	this.lazyParams = lazyParameters;
	this.routeStack = [];
	this.metaHandlers = [];
};
$hxClasses["mweb.Dispatcher"] = mweb_Dispatcher;
mweb_Dispatcher.__name__ = true;
mweb_Dispatcher.splitUri = function(uri) {
	var p = uri.split("/");
	var np = [];
	var _g = 0;
	while(_g < p.length) {
		var part = p[_g];
		++_g;
		switch(part) {
		case "..":
			if(np.length == 0) throw new js__$Boot_HaxeError(mweb_RequestError.InvalidUri(uri,"The URI goes beyond the server root"));
			np.pop();
			break;
		case ".":case "":
			break;
		default:
			np.push(part);
		}
	}
	np.reverse();
	return np;
};
mweb_Dispatcher.buildArgs = function(args,arg,err) {
	{
		var _g = arg.type;
		switch(_g[1]) {
		case 0:
			var many = _g[3];
			var tname = _g[2];
			if(args == null) {
				if(arg.opt && many) return []; else return null;
			}
			if((args instanceof Array) && args.__enum__ == null) {
				var uarg = args;
				if(many) {
					var tmp;
					var _g1 = [];
					var _g2 = 0;
					while(_g2 < uarg.length) {
						var arg1 = uarg[_g2];
						++_g2;
						var tmp1;
						var t = mweb_Decoder.get_current().decode(tname,arg1);
						if(t == null) throw new js__$Boot_HaxeError(err.withError(mweb_DispatcherErrorType.InvalidArgumentType(arg1,tname)));
						tmp1 = t;
						_g1.push(tmp1);
					}
					tmp = _g1;
					return tmp;
				} else throw new js__$Boot_HaxeError(err.withError(mweb_DispatcherErrorType.MultipleParamValues(arg.key,uarg)));
			} else {
				var t1 = mweb_Decoder.get_current().decode(tname,args);
				if(t1 == null) throw new js__$Boot_HaxeError(err.withError(mweb_DispatcherErrorType.InvalidArgumentType(args,tname)));
				if(many) return [t1]; else return t1;
			}
			break;
		case 1:
			var fields = _g[2];
			var ret = { };
			var hasValue = false;
			var failedFields = [];
			var $it0 = HxOverrides.iter(fields);
			while( $it0.hasNext() ) {
				var field = $it0.next();
				var nfield = Reflect.field(args,field.key);
				var arg2 = mweb_Dispatcher.buildArgs(nfield,field,err);
				if(arg2 == null) {
					if(!field.opt) failedFields.push(field.key);
				} else {
					hasValue = true;
					ret[field.key] = arg2;
				}
			}
			if(hasValue && failedFields.length > 0) throw new js__$Boot_HaxeError(err.withError(mweb_DispatcherErrorType.MissingArgument(failedFields)));
			if(!hasValue) {
				if(arg.opt) return null; else throw new js__$Boot_HaxeError(err.withError(mweb_DispatcherErrorType.MissingArgument(arg.key == ""?failedFields:[arg.key])));
			}
			return ret;
		}
	}
};
mweb_Dispatcher.prototype = {
	getParams: function() {
		if(this.params == null && this.lazyParams != null) this.params = this.lazyParams();
		return this.params;
	}
	,dispatch: function(route) {
		var last = this.routeStack;
		this.routeStack = last.slice();
		try {
			var ret = this._dispatch(route);
			this.routeStack = last;
			return ret;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			this.routeStack = last;
			throw new js__$Boot_HaxeError(e);
		}
		return null;
	}
	,_dispatch: function(route) {
		var _g = this;
		var route1 = route;
		var maps = [];
		var map = route1._getMapFunction();
		if(map != null) maps.push(map);
		var rstack = this.routeStack;
		rstack.push(route1);
		var data = route1._getDispatchData();
		var subj = route1._getSubject();
		var pieces = this.pieces;
		var lastUri = pieces[pieces.length - 1];
		var fields = [];
		var ethis = subj;
		while(true) {
			var idx = pieces.length - 1;
			var cur = pieces[idx];
			if(cur == null) cur = "";
			switch(data[1]) {
			case 0:
				var objData = data[2];
				var n = pieces.pop();
				var wasNull = n == null;
				if(wasNull) n = "";
				lastUri = n;
				var best = null;
				var this1 = objData.routes;
				var idx1 = mweb_internal__$ArrayMap_ArrayMap_$Impl_$.firstIndex(this1,n);
				var len = this1.length;
				if(idx1 >= 0) {
					var _g1 = idx1;
					while(_g1 < len) {
						var i = _g1++;
						var val = this1[i];
						if(val.key != n) break;
						var tmp;
						if(!(val.verb == "any")) {
							var tmp1;
							var str = val.verb.toLowerCase();
							tmp1 = str;
							tmp = tmp1 == _g.verb;
						} else tmp = true;
						if(tmp) {
							var tmp2;
							if(!(best == null)) {
								var tmp3;
								var str1 = val.verb.toLowerCase();
								tmp3 = str1;
								tmp2 = tmp3 == _g.verb;
							} else tmp2 = true;
							if(tmp2) best = val;
						}
					}
				}
				if(best == null) {
					var this2 = objData.routes;
					var idx2 = mweb_internal__$ArrayMap_ArrayMap_$Impl_$.firstIndex(this2,"");
					var len1 = this2.length;
					if(idx2 >= 0) {
						var _g2 = idx2;
						while(_g2 < len1) {
							var i1 = _g2++;
							var val1 = this2[i1];
							if(val1.key != "") break;
							var tmp4;
							if(!(val1.verb == "any")) {
								var tmp5;
								var str2 = val1.verb.toLowerCase();
								tmp5 = str2;
								tmp4 = tmp5 == _g.verb;
							} else tmp4 = true;
							if(tmp4) {
								var tmp6;
								if(!(best == null)) {
									var tmp7;
									var str3 = val1.verb.toLowerCase();
									tmp7 = str3;
									tmp6 = tmp7 == _g.verb;
								} else tmp6 = true;
								if(tmp6) best = val1;
							}
						}
					}
					if(best == null) {
						var this3 = objData.routes;
						var idx3 = mweb_internal__$ArrayMap_ArrayMap_$Impl_$.firstIndex(this3,"default");
						var len2 = this3.length;
						if(idx3 >= 0) {
							var _g3 = idx3;
							while(_g3 < len2) {
								var i2 = _g3++;
								var val2 = this3[i2];
								if(val2.key != "default") break;
								var tmp8;
								if(!(val2.verb == "any")) {
									var tmp9;
									var str4 = val2.verb.toLowerCase();
									tmp9 = str4;
									tmp8 = tmp9 == _g.verb;
								} else tmp8 = true;
								if(tmp8) {
									var tmp10;
									if(!(best == null)) {
										var tmp11;
										var str5 = val2.verb.toLowerCase();
										tmp11 = str5;
										tmp10 = tmp11 == _g.verb;
									} else tmp10 = true;
									if(tmp10) best = val2;
								}
							}
						}
					}
					if(best != null && n != null && !wasNull) pieces.push(n);
				}
				if(best == null) throw new js__$Boot_HaxeError(new mweb_DispatcherError(lastUri,fields,mweb_DispatcherErrorType.NoRouteFound(n)));
				fields.push(best.name);
				subj = Reflect.field(subj,best.name);
				data = best.data;
				break;
			case 1:
				var fn = data[2];
				if(!Reflect.isFunction(subj)) throw new js__$Boot_HaxeError(new mweb_DispatcherError(lastUri,fields,mweb_DispatcherErrorType.Internal(mweb_InternalError.InvalidFunction(subj))));
				var callArgs = [];
				var _g4 = 0;
				var _g11 = fn.addrArgs;
				while(_g4 < _g11.length) {
					var arg = _g11[_g4];
					++_g4;
					var argArray = callArgs;
					if(arg.many) {
						argArray = [];
						callArgs.push(argArray);
					}
					while(true) {
						if(arg.type == "mweb.Dispatcher") {
							argArray.push(this);
							break;
						}
						cur = pieces.pop();
						if(cur == null) {
							if(!arg.opt) throw new js__$Boot_HaxeError(new mweb_DispatcherError(lastUri,fields,mweb_DispatcherErrorType.MissingAddrArguments(arg.name)));
							if(!arg.many) argArray.push(null);
						} else {
							var t = mweb_Decoder.get_current().decode(arg.type,cur);
							if(t == null) throw new js__$Boot_HaxeError(new mweb_DispatcherError(lastUri,fields,mweb_DispatcherErrorType.InvalidArgumentType(cur,arg.type)));
							argArray.push(t);
						}
						if(!(arg.many && pieces.length > 0)) break;
					}
				}
				if(fn.args != null) callArgs.push(mweb_Dispatcher.buildArgs(this.getParams(),{ key : "", opt : fn.args.opt, type : mweb_internal_CType.AnonType(fn.args.data)},new mweb_DispatcherError(lastUri,fields,null)));
				var _g5 = 0;
				var _g12 = this.metaHandlers;
				while(_g5 < _g12.length) {
					var handler = _g12[_g5];
					++_g5;
					handler(fn.metas);
				}
				var tmp12;
				var func = subj;
				tmp12 = func.apply(ethis,callArgs);
				var ret = tmp12;
				var i3 = maps.length;
				while(i3-- > 0) ret = maps[i3](ret);
				if(this.pieces.length > 0) {
					var p = pieces.slice();
					p.reverse();
					throw new js__$Boot_HaxeError(new mweb_DispatcherError(lastUri,fields,mweb_DispatcherErrorType.TooManyValues(p)));
				}
				return ret;
			case 2:
				if(!js_Boot.__instanceof(subj,mweb_Route)) throw new js__$Boot_HaxeError(new mweb_DispatcherError(lastUri,fields,mweb_DispatcherErrorType.Internal(mweb_InternalError.InvalidRoute(subj))));
				route1 = subj;
				rstack.push(route1);
				subj = route1._getSubject();
				ethis = subj;
				data = route1._getDispatchData();
				var map1 = route1._getMapFunction();
				if(map1 != null) maps.push(map1);
				break;
			}
		}
		return null;
	}
	,__class__: mweb_Dispatcher
};
var mweb_DispatcherError = function(uriPart,fields,error) {
	this.uriPart = uriPart;
	this.fields = fields;
	this.error = error;
};
$hxClasses["mweb.DispatcherError"] = mweb_DispatcherError;
mweb_DispatcherError.__name__ = true;
mweb_DispatcherError.prototype = {
	withError: function(e) {
		return new mweb_DispatcherError(this.uriPart,this.fields,e);
	}
	,toString: function() {
		return "Dispatcher error " + Std.string(this.error) + " while processing " + this.uriPart + " (" + this.fields.join("->") + ")";
	}
	,__class__: mweb_DispatcherError
};
var mweb_DispatcherErrorType = $hxClasses["mweb.DispatcherErrorType"] = { __ename__ : true, __constructs__ : ["MissingAddrArguments","InvalidArgumentType","MultipleParamValues","MissingArgument","TooManyValues","NoRouteFound","Internal"] };
mweb_DispatcherErrorType.MissingAddrArguments = function(argName) { var $x = ["MissingAddrArguments",0,argName]; $x.__enum__ = mweb_DispatcherErrorType; $x.toString = $estr; return $x; };
mweb_DispatcherErrorType.InvalidArgumentType = function(contents,type) { var $x = ["InvalidArgumentType",1,contents,type]; $x.__enum__ = mweb_DispatcherErrorType; $x.toString = $estr; return $x; };
mweb_DispatcherErrorType.MultipleParamValues = function(parameterName,values) { var $x = ["MultipleParamValues",2,parameterName,values]; $x.__enum__ = mweb_DispatcherErrorType; $x.toString = $estr; return $x; };
mweb_DispatcherErrorType.MissingArgument = function(parameterNames) { var $x = ["MissingArgument",3,parameterNames]; $x.__enum__ = mweb_DispatcherErrorType; $x.toString = $estr; return $x; };
mweb_DispatcherErrorType.TooManyValues = function(extra) { var $x = ["TooManyValues",4,extra]; $x.__enum__ = mweb_DispatcherErrorType; $x.toString = $estr; return $x; };
mweb_DispatcherErrorType.NoRouteFound = function(uriPart) { var $x = ["NoRouteFound",5,uriPart]; $x.__enum__ = mweb_DispatcherErrorType; $x.toString = $estr; return $x; };
mweb_DispatcherErrorType.Internal = function(err) { var $x = ["Internal",6,err]; $x.__enum__ = mweb_DispatcherErrorType; $x.toString = $estr; return $x; };
var mweb_InternalError = $hxClasses["mweb.InternalError"] = { __ename__ : true, __constructs__ : ["InvalidRoute","InvalidFunction"] };
mweb_InternalError.InvalidRoute = function(value) { var $x = ["InvalidRoute",0,value]; $x.__enum__ = mweb_InternalError; $x.toString = $estr; return $x; };
mweb_InternalError.InvalidFunction = function(value) { var $x = ["InvalidFunction",1,value]; $x.__enum__ = mweb_InternalError; $x.toString = $estr; return $x; };
var mweb_DecoderError = $hxClasses["mweb.DecoderError"] = { __ename__ : true, __constructs__ : ["TypeNotFound","DecoderNotFound"] };
mweb_DecoderError.TypeNotFound = function(type) { var $x = ["TypeNotFound",0,type]; $x.__enum__ = mweb_DecoderError; $x.toString = $estr; return $x; };
mweb_DecoderError.DecoderNotFound = function(type) { var $x = ["DecoderNotFound",1,type]; $x.__enum__ = mweb_DecoderError; $x.toString = $estr; return $x; };
var mweb_RequestError = $hxClasses["mweb.RequestError"] = { __ename__ : true, __constructs__ : ["InvalidRequest","InvalidUri","PostSizeTooBig"] };
mweb_RequestError.InvalidRequest = function(message) { var $x = ["InvalidRequest",0,message]; $x.__enum__ = mweb_RequestError; $x.toString = $estr; return $x; };
mweb_RequestError.InvalidUri = function(uri,message) { var $x = ["InvalidUri",1,uri,message]; $x.__enum__ = mweb_RequestError; $x.toString = $estr; return $x; };
mweb_RequestError.PostSizeTooBig = function(maxSize,curSize) { var $x = ["PostSizeTooBig",2,maxSize,curSize]; $x.__enum__ = mweb_RequestError; $x.toString = $estr; return $x; };
var mweb_internal__$ArrayMap_ArrayMap_$Impl_$ = {};
$hxClasses["mweb.internal._ArrayMap.ArrayMap_Impl_"] = mweb_internal__$ArrayMap_ArrayMap_$Impl_$;
mweb_internal__$ArrayMap_ArrayMap_$Impl_$.__name__ = true;
mweb_internal__$ArrayMap_ArrayMap_$Impl_$.firstIndex = function(this1,key) {
	var min = 0;
	var max = this1.length;
	while(min < max) {
		var mid = min + (max - min >> 1);
		var imid = this1[mid].key;
		if(key < imid) max = mid; else if(key > imid) min = mid + 1; else {
			while(mid > 0 && this1[mid - 1].key == key) mid--;
			return mid;
		}
	}
	return -1;
};
var mweb_internal_CType = $hxClasses["mweb.internal.CType"] = { __ename__ : true, __constructs__ : ["TypeName","AnonType"] };
mweb_internal_CType.TypeName = function(name,many) { var $x = ["TypeName",0,name,many]; $x.__enum__ = mweb_internal_CType; $x.toString = $estr; return $x; };
mweb_internal_CType.AnonType = function(names) { var $x = ["AnonType",1,names]; $x.__enum__ = mweb_internal_CType; $x.toString = $estr; return $x; };
var thx_Either = $hxClasses["thx.Either"] = { __ename__ : true, __constructs__ : ["Left","Right"] };
thx_Either.Left = function(value) { var $x = ["Left",0,value]; $x.__enum__ = thx_Either; $x.toString = $estr; return $x; };
thx_Either.Right = function(value) { var $x = ["Right",1,value]; $x.__enum__ = thx_Either; $x.toString = $estr; return $x; };
var tink_core__$Callback_CallbackList_$Impl_$ = {};
$hxClasses["tink.core._Callback.CallbackList_Impl_"] = tink_core__$Callback_CallbackList_$Impl_$;
tink_core__$Callback_CallbackList_$Impl_$.__name__ = true;
tink_core__$Callback_CallbackList_$Impl_$.add = function(this1,cb) {
	var tmp;
	var tmp1;
	var this2;
	this2 = new Array(1);
	tmp1 = this2;
	var ret = tmp1;
	ret[0] = cb;
	tmp = ret;
	var cell = tmp;
	this1.push(cell);
	return function() {
		if(HxOverrides.remove(this1,cell)) cell[0] = null;
		cell = null;
	};
};
tink_core__$Callback_CallbackList_$Impl_$.invoke = function(this1,data) {
	var _g = 0;
	var _g1 = this1.slice();
	while(_g < _g1.length) {
		var cell = _g1[_g];
		++_g;
		if(cell[0] != null) cell[0](data);
	}
};
tink_core__$Callback_CallbackList_$Impl_$.clear = function(this1) {
	var _g = 0;
	var _g1 = this1.splice(0,this1.length);
	while(_g < _g1.length) {
		var cell = _g1[_g];
		++_g;
		cell[0] = null;
	}
};
var tink_core_TypedError = function() { };
$hxClasses["tink.core.TypedError"] = tink_core_TypedError;
tink_core_TypedError.__name__ = true;
tink_core_TypedError.prototype = {
	printPos: function() {
		return this.pos.className + "." + this.pos.methodName + ":" + this.pos.lineNumber;
	}
	,toString: function() {
		var ret = "Error: " + this.message;
		if(this.pos != null) ret += " " + this.printPos();
		return ret;
	}
	,throwSelf: function() {
		throw new js__$Boot_HaxeError(this);
	}
	,__class__: tink_core_TypedError
};
var tink_core__$Future_Future_$Impl_$ = {};
$hxClasses["tink.core._Future.Future_Impl_"] = tink_core__$Future_Future_$Impl_$;
tink_core__$Future_Future_$Impl_$.__name__ = true;
tink_core__$Future_Future_$Impl_$._new = function(f) {
	return f;
};
var tink_core_FutureTrigger = function() {
	var _g = this;
	this.list = [];
	this.future = tink_core__$Future_Future_$Impl_$._new(function(callback) {
		var tmp;
		if(_g.list == null) {
			callback(_g.result);
			tmp = null;
		} else tmp = tink_core__$Callback_CallbackList_$Impl_$.add(_g.list,callback);
		return tmp;
	});
};
$hxClasses["tink.core.FutureTrigger"] = tink_core_FutureTrigger;
tink_core_FutureTrigger.__name__ = true;
tink_core_FutureTrigger.prototype = {
	__class__: tink_core_FutureTrigger
};
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
$hxClasses.Math = Math;
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = true;
$hxClasses.Array = Array;
Array.__name__ = true;
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
var __map_reserved = {}
var ArrayBuffer = $global.ArrayBuffer || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
var DataView = $global.DataView || js_html_compat_DataView;
var Uint8Array = $global.Uint8Array || js_html_compat_Uint8Array._new;
Route2._dispatchDataCache = mweb_internal_DispatchData.RouteObj({ routes : [{ key : "", verb : "any", name : "any", data : mweb_internal_DispatchData.RouteFunc({ addrArgs : [], metas : [], args : null})},{ key : "pippo", verb : "any", name : "anyPippo", data : mweb_internal_DispatchData.RouteFunc({ addrArgs : [], metas : [], args : null})}]});
Main._dispatchDataCache = mweb_internal_DispatchData.RouteObj({ routes : [{ key : "hello", verb : "any", name : "anyHello", data : mweb_internal_DispatchData.RouteFunc({ addrArgs : [{ opt : false, type : "String", name : "name", many : false},{ opt : true, type : "mweb.Dispatcher", name : "d", many : false}], metas : [], args : null})}]});
haxe_io_FPHelper.i64tmp = (function($this) {
	var $r;
	var x = new haxe__$Int64__$_$_$Int64(0,0);
	$r = x;
	return $r;
}(this));
js_Boot.__toStr = {}.toString;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
mweb_Decoder.__meta__ = { obj : { abstractDefs : null}};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
