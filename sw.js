/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/10/29/hello-world/index.html","0e861fa914c1f7a0c096112b4ef931cd"],["/2017/01/06/markdown语法/index.html","5655336f146f575d3b83de0f299e07df"],["/2017/01/06/markdown语法/yufa.png","8719de11346fe52ed128e85324096dfc"],["/2017/01/06/好久不见/index.html","4360cf79c504ed9870f53b9a4d007263"],["/2017/01/07/弄个大新闻/index.html","99991c2b6c9414b2ae25dd5f6f0f95d0"],["/2017/01/08/总结/index.html","0dae680f3024c9f9d18c51a4d48b57e7"],["/2017/01/12/Android传递简单数据的方法/index.html","bbc80788cf3f2552dd16c62aa96a4582"],["/2017/01/13/为什么静态方法不能直接访问非静态成员/index.html","b66ea23db1793f0f5bd1dbbdfe9a559a"],["/2017/01/16/关于京东抢优惠券的思考/index.html","65ec8d5356e7ca8d612c4f3f06dac684"],["/2017/01/16/关于京东抢优惠券的思考/jd1.jpg","5f53c9970a59051c586a309142a2de89"],["/2017/01/16/关于京东抢优惠券的思考/jd11.jpg","f205e05055fe185913515c68a9e0a2d2"],["/2017/01/16/关于京东抢优惠券的思考/jd12.png","0facb5005bb7157736b2037c2a84a740"],["/2017/01/16/关于京东抢优惠券的思考/jd2.jpg","84d68abd09cfa889288d405b03c70192"],["/2017/01/16/关于京东抢优惠券的思考/jd233.jpg","4f67d6ca29dff1779f2a35a5dc63106f"],["/2017/01/16/关于京东抢优惠券的思考/jd3.jpg","33078c6902bfcffa6add5c4fa9d8256f"],["/2017/01/16/关于京东抢优惠券的思考/jd4.jpg","61d8efc5e1ba21f8c014c367d346ad7e"],["/2017/01/16/关于京东抢优惠券的思考/jd5.jpg","8dc31cc4a89da7d1684f876a314bcf76"],["/2017/01/16/关于京东抢优惠券的思考/jd6_1.jpg","cdc1275b246a794923192a08ae2399f7"],["/2017/01/16/关于京东抢优惠券的思考/jd6_2.jpg","92a04f119f911ba8d0a699d7ffcb2e63"],["/2017/01/16/关于京东抢优惠券的思考/jd7.jpg","0da09824149c792e122b87c441bf1eb8"],["/2017/01/16/关于京东抢优惠券的思考/jd8.jpg","b29ba362ff85e1b43422ae3269d37975"],["/2017/01/16/关于京东抢优惠券的思考/jd9.jpg","9e7e3ada8894616aae0f183fe88d2b11"],["/2017/01/24/Android的数据库/hj.jpg","a05bb14dcd21ab3118bfba37d9335359"],["/2017/01/24/Android的数据库/index.html","f3238b114e9b4c176697a660642bf05d"],["/2017/01/24/Android的数据库/l1.jpg","7e69e703c1d74d5bb2a851a29311615c"],["/2017/01/24/Android的数据库/l2.jpg","aeff5509e3d17ce0a404e0fc4de5c9fa"],["/2017/01/24/Android的数据库/l3.jpg","700b7ecb4c4ea5a92de247ef192c7f37"],["/2017/01/24/Android的数据库/sync.jpg","e03b62c7a05f2316dc86753420507b46"],["/2017/01/26/Java泛型笔记/index.html","4f558687e70011441fdfcb3805c1a739"],["/2017/01/27/单例模式/index.html","3cfff0b79de283e3d96a7fef0fb7bd0f"],["/2017/02/01/简易翻墙的方法/f1.jpg","2581d86292ab9052514aee9fd91f3b8f"],["/2017/02/01/简易翻墙的方法/f2.jpg","9e109c806a7fe69b9aad81ff3f2b9906"],["/2017/02/01/简易翻墙的方法/index.html","b60b8f5a3615065e1f44bf266080e967"],["/2017/02/01/简易翻墙的方法/使用方法.jpg","7f6d9b70c529784a4deaec93c7e3b8bc"],["/2017/02/04/Android通知栏的微技巧-转/Android通知栏.png","a7c8b4417475b4d15f248e9aacb74350"],["/2017/02/04/Android通知栏的微技巧-转/index.html","d5f00d0e412f91ffeef5849ba2945a23"],["/2017/02/05/Android的RecyclerView/index.html","2b89afa4e84eeea0d6d8de4bdae20b56"],["/2017/02/05/Android的RecyclerView/r1.jpg","9eeec54207d455491e0b8e08e5df24dd"],["/2017/02/05/Android的RecyclerView/r2.jpg","973a10b7b0ac96ab5abb064141ad4613"],["/2017/02/05/Android的RecyclerView/r3.jpg","bc1e15be3106cbcf6e9beef4be22734b"],["/2017/02/12/Android解析json的方法/face.jpg","d1d4e6a3140cdcc50979d31cb72c1f15"],["/2017/02/12/Android解析json的方法/g1.jpg","71820d6dedf01e29832e8e2f0508ae7a"],["/2017/02/12/Android解析json的方法/g2.jpg","5c90926ac82dcbd1d3cc404e3e8aa32f"],["/2017/02/12/Android解析json的方法/g3.jpg","4c166816b8974b811aa38862b01c1919"],["/2017/02/12/Android解析json的方法/index.html","d31bb26638c88ce7be65b0df2ce64119"],["/2017/02/12/全局获得Context的方法/index.html","b55bb2adc76d832094f224c8a826d1b0"],["/2017/02/13/利用SharedPreferences存储用户名密码/face.jpg","492244640fbf7e3e850308b7cd549064"],["/2017/02/13/利用SharedPreferences存储用户名密码/index.html","7bb6412bc19e46f291a3d3637e9c0e8e"],["/2017/02/21/Java的io流笔记/face.jpg","cddb614ef8ea50373f7dab5e261e88e0"],["/2017/02/21/Java的io流笔记/index.html","83411de1bc5a841cc49ffcb12a51134a"],["/2017/02/24/装饰模式/index.html","39a21418fbc127de0ac804bfa7e24eb8"],["/2017/02/24/装饰模式/z1.jpg","1caaff9830cfca6d1c0a6d44b634ea1d"],["/2017/02/24/装饰模式/z3.jpg","4c14ce42eeca00bfc1820bcf486abd42"],["/2017/02/26/Java的线程笔记/index.html","fcea369ab5697bf2b25b1c90dd54b07d"],["/2017/02/26/Java的线程笔记/t1.jpg","531ac5ab216b6c62835ba8185a06c53b"],["/2017/02/26/Java的线程笔记/t2.jpg","f9f57bcceba663fed989ec61288d3387"],["/2017/02/26/Java的线程笔记/t3.jpg","3d31a7efb1ed0416d0e957ca4df385e3"],["/2017/02/26/Java的线程笔记/t4.jpg","32d0c8e35cc2db2236efe845622474a7"],["/2017/02/26/Java的线程笔记/t5.jpg","178da46132727f9a2c373d7a39c497c2"],["/2017/02/26/Java的线程笔记/t6.jpg","3ae197d34b60b3d74202e18804bcbca7"],["/2017/02/26/Java的线程笔记/t7.jpg","0ad16bd8e4ef1ba3e133736b9a88fedf"],["/2017/03/30/Android的NavigationView获取headerLayout组件的方法/index.html","4e219b2a1e3d3175b5e64391bc2a2ce4"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/face.png","c9b98aefb439fa04e587d2ee5bacf0a9"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/index.html","4f07946983da9a593c20c1ef5c49f28b"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/o1.jpg","dab5e6b0ac04c512bd8521e73f57b317"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/o2.jpg","ef761bfc2b3b095d2f978e6973e20fc0"],["/2017/04/30/mvp和mvvm框架笔记/index.html","b006bfa90ea022760be86b4c2ea7bec0"],["/2017/04/30/mvp和mvvm框架笔记/mvp.jpg","bf7bf997af33fddd6c725348fb220b11"],["/2017/04/30/mvp和mvvm框架笔记/mvvm.jpg","84e8ac6f4173febb3abef819c6847c1c"],["/2017/05/11/Android的fragment页面切换优化笔记/index.html","c9276b3fe440f4f3d4a481a29641845f"],["/2017/06/15/Retrofit2笔记/index.html","4c055ac297839c3efbcc61b9363350a5"],["/2017/07/01/android开发艺术探索笔记/b1.jpg","a1a8c64e3f734b73f77268b8fc5f2b1f"],["/2017/07/01/android开发艺术探索笔记/b2.jpg","b307f466aed09d6c457e9f67ab029e55"],["/2017/07/01/android开发艺术探索笔记/b3.jpg","3e0b93a47b78d6d7ddbe37ce5c23388e"],["/2017/07/01/android开发艺术探索笔记/b4.jpg","d96cc8947bc932eadb35752b7d446aea"],["/2017/07/01/android开发艺术探索笔记/b5.jpg","87df47140a9a2340a7fe71640e81359e"],["/2017/07/01/android开发艺术探索笔记/face.jpg","54a7967ae6523116af00474944595736"],["/2017/07/01/android开发艺术探索笔记/index.html","9eed547f24650dc2bdc81aa5a766f17a"],["/2017/07/01/android开发艺术探索笔记/s11.jpg","44ecc475fc71d4f1324700e2cdc3e537"],["/2017/07/16/代理模式/d1.jpg","c3b222d9b50571a393cf86fe466bee03"],["/2017/07/16/代理模式/d2.jpg","025c9760e4eb8c99cb52344d3e5af608"],["/2017/07/16/代理模式/index.html","c8da15f6736fbb4e5b2db43ee96b48cf"],["/2017/07/19/BroadcastReceiver广播/g1.jpg","95acdfb4d5fc9a495a5ae576c98b286a"],["/2017/07/19/BroadcastReceiver广播/index.html","fae228cb2a1f544381c32004845219e0"],["/2017/07/21/git与github快速入门/face.jpg","127e571d0e61487c6863a02f516a0cda"],["/2017/07/21/git与github快速入门/g1.jpg","16340b4a74d0bf17ab65f5ced4999896"],["/2017/07/21/git与github快速入门/g2.jpg","a6fae17935f965048679c70c04c6205a"],["/2017/07/21/git与github快速入门/g3.jpg","0f7aac4cc7e33b5c751c918d99b10711"],["/2017/07/21/git与github快速入门/g4.jpg","709037e4cccf6e25c3115eb6c2fc581c"],["/2017/07/21/git与github快速入门/g5.jpg","f9a4549ae09c867c1bfe160f2737429d"],["/2017/07/21/git与github快速入门/g6.jpg","11fcb2a3b2a0fda51c3ae1195c64bf02"],["/2017/07/21/git与github快速入门/git.jpg","f81f175b2aa60accc5be3d2938443733"],["/2017/07/21/git与github快速入门/git1.jpg","8f95b15144b6a86f51d2269957f3240e"],["/2017/07/21/git与github快速入门/git2.jpg","309085d23b2601d757722c8e87372b7a"],["/2017/07/21/git与github快速入门/index.html","8f13ada66554ba1605e91debacf5ecb5"],["/2017/07/21/git与github快速入门/study.png","2075a23765cb6faa00fb5d9bedaf8fa4"],["/2017/07/24/Android-Butter-Knife-框架/b1.jpg","925e050934ad31922e1c83a42c26b714"],["/2017/07/24/Android-Butter-Knife-框架/b2.jpg","0eff5cb764d652afe3fb32f7960ae103"],["/2017/07/24/Android-Butter-Knife-框架/b3.jpg","c8252248c54856bbf498f781be4907fb"],["/2017/07/24/Android-Butter-Knife-框架/b4.jpg","ae76887599574d57a58d5972fadf7a6c"],["/2017/07/24/Android-Butter-Knife-框架/index.html","9bb2fe495fb4c4c24e986841d1ead435"],["/2017/07/31/一些android笔记/b1.jpg","925e050934ad31922e1c83a42c26b714"],["/2017/07/31/一些android笔记/b3.jpg","c8252248c54856bbf498f781be4907fb"],["/2017/07/31/一些android笔记/ba1.jpg","943ee61e81f33fcc4dd4018ca62fc129"],["/2017/07/31/一些android笔记/c1.jpg","2a4a4900587a645d8a0f9a7790de477c"],["/2017/07/31/一些android笔记/index.html","35ec481523d5a06830c7797ae3f5742c"],["/2017/07/31/一些android笔记/s1.jpg","cb3b9d67f22c02d636b12be452c13922"],["/2017/07/31/一些android笔记/s2.jpg","8fb37f9f69865a66b7c7f2a1afd0c2ae"],["/2017/07/31/一些android笔记/sb1.jpg","fb76380ff9a028e42df8490ff5c28c9b"],["/2017/07/31/一些android笔记/sw1.jpg","d5f4e22f98750e34139e8ed06bfa0418"],["/2017/08/04/Android动画笔记/index.html","d51095782b3d9e84ad9be71205d051c5"],["/2017/08/09/Android-布局复习/c.gif","7e34c56d6324226c2b57dce7a28f289f"],["/2017/08/09/Android-布局复习/g1.jpg","2e7c78a7bdc1211318f1a7314bbe80e2"],["/2017/08/09/Android-布局复习/g2.jpg","f0d24aee0759cd18a0310baace202764"],["/2017/08/09/Android-布局复习/gr1.jpg","8cdfa1fbbfdb2accb783346fbf3f673f"],["/2017/08/09/Android-布局复习/index.html","1407111e4b3ded6b67abc3dab320e262"],["/2017/08/09/Android-布局复习/l1.jpg","22739cc4c3d40cc837f53db4c5b1e90a"],["/2017/08/09/Android-布局复习/l2.jpg","6f1efa4f3549c68d6908fa10f9fce87c"],["/2017/08/09/Android-布局复习/l3.jpg","fbfa39bfb0cc0eb0e8536c81ff696bed"],["/2017/08/09/Android-布局复习/r1.jpg","10c4c2cf2114fc08c33ee027a6e5bc2b"],["/2017/08/09/Android-布局复习/r2.jpg","7a0821279b7cfc7929ab734a3fef36cd"],["/2017/08/12/Toolbar的玩法-伪/co1.gif","e17d721c6927df2912720f9d3a0d0e1f"],["/2017/08/12/Toolbar的玩法-伪/co1j.gif","b50f90da72c46dccfe8e09cc725329b1"],["/2017/08/12/Toolbar的玩法-伪/co2.gif","71d3beb19ff87ed9c3a0fbe299ef4f0f"],["/2017/08/12/Toolbar的玩法-伪/co3.gif","63047b639a00bd4154619688d47ed80d"],["/2017/08/12/Toolbar的玩法-伪/co4.gif","e3e6d88fcff064e4f14b1541d776e431"],["/2017/08/12/Toolbar的玩法-伪/coo1.jpg","e3920ef7d5dc14f018fd3dafa390be7e"],["/2017/08/12/Toolbar的玩法-伪/index.html","ee310f44b2f7053da751e3ea28f80bc0"],["/2017/08/12/Toolbar的玩法-伪/t1.jpg","1688359c4b328ef1907f5c04eb498c75"],["/2017/08/12/Toolbar的玩法-伪/tt1.gif","461d4b8c8c7eeba4985a82fefe6070e0"],["/2017/09/23/RecyclerView动态切换不同布局的方法/b1.jpg","6b48198a8310bcc30059a97ff4b476a3"],["/2017/09/23/RecyclerView动态切换不同布局的方法/b2.jpg","6e59ceeab84d45219df717d324830fcf"],["/2017/09/23/RecyclerView动态切换不同布局的方法/cd.jpg","888843d84f1ba2f774ab5c25536574f6"],["/2017/09/23/RecyclerView动态切换不同布局的方法/index.html","dcbeb6ebdbb633f49c8a65aad19d8b76"],["/2017/09/23/RecyclerView动态切换不同布局的方法/r1.jpg","5aa90d955fd77d28573e2b4538f4f0f4"],["/2017/09/23/RecyclerView动态切换不同布局的方法/r2.jpg","90fdd8ba0112794b5a5fe45db82fb5f9"],["/2017/09/23/RecyclerView动态切换不同布局的方法/r3.gif","889b392ff2e5eb80068dbf6f9566f27d"],["/2018/01/14/电锯惊魂8/index.html","ce7de2d17bdc50c5c3dc82142aedc8ec"],["/2018/02/15/java细节笔记/face.jpg","4b85f92e1478a12013808e44a9fa1fc7"],["/2018/02/15/java细节笔记/index.html","4490bad1b76c64dbf3cedb51d526c282"],["/2018/02/15/java细节笔记/java1.jpg","d2b4a31471061ae91bfe7ae06686951d"],["/2018/02/15/java细节笔记/java2.png","ed41928f8bbcb700483c50bc356b5de9"],["/2018/02/15/java细节笔记/java3.jpg","19ae81b450121dde484b47c6b6bc8428"],["/2018/02/15/java细节笔记/java4.jpg","fdc54faed81f01ff31eccd949cbb3301"],["/2018/03/04/Android-自定义View的探索/index.html","4e8de9fa9676b146c85686f8cf444186"],["/2018/03/09/Android的Drawable/index.html","2f024764095620061a794a4293ea6d87"],["/2018/03/09/Android的悬浮窗/index.html","ae5cce63071219b4d03359d7aa2963fa"],["/2018/03/13/Android常用的ViewPager/index.html","88c64d4ee5c1fcd553e4a160e83fecdd"],["/2018/03/19/python-入门笔记/index.html","c51c7b3a6915cce7af2b0821716b1d3b"],["/2018/03/19/python-入门笔记/p1.png","63a8f0765f53686f359ac0a4a67ae314"],["/2018/03/19/python-入门笔记/p2.png","35fd4e9069231985f562f00455e97dba"],["/2018/03/19/python-入门笔记/p3.png","db283f7ef59ee5e912c5ae2082a33879"],["/2018/03/19/python-入门笔记/p4.png","93b9747abad3d81214b710e9a9d125a7"],["/2018/03/19/python-入门笔记/p5.png","139f53c418f4262b9443467124c05154"],["/2018/03/19/python-入门笔记/p6.png","4867a70e9dcc618337fe418fccad0e45"],["/2018/03/19/python-入门笔记/p7.png","1b84fff5456b5df9b5eaa67385415ff1"],["/2018/03/19/python-入门笔记/p8.png","d18cf77bf770bdc42eb4d7fb16f70ef5"],["/2018/03/19/python-入门笔记/p9.png","fa7d751e8929d604a937937c2f87bfc5"],["/2018/04/09/Android的运行时权限/index.html","ff6aea12ae5c6e29ea7af87b050a4f2b"],["/2018/04/09/Android的运行时权限/permission.png","361227ac9b061134f1e00bb0c8e4c637"],["/2018/04/22/正则表达式笔记/index.html","110ad6019485a2e70a034dc0236ad3b6"],["/2018/06/10/Android串口开发的一些事/index.html","0bf16b534cac9cfe6c6ea5d9748a5bbe"],["/2018/06/10/Android串口开发的一些事/p.png","e40d530a6b1f0b49186dac2335a9a18c"],["/2018/06/23/Android的RxJava笔记/index.html","1df02cf229bbcfb157ecfebb843312b2"],["/2018/06/23/Android的RxJava笔记/r1.png","a5211e974edd613583a510958a1dd75f"],["/2018/06/23/Android的RxJava笔记/r2.png","368b382d4454b30f25808a747e24119e"],["/2018/06/23/Android的RxJava笔记/r3.jpg","dea1e0d7a40dbf8034d2ff532a0b120e"],["/2018/06/23/Android的RxJava笔记/r4.jpg","c551db9622f9bcc9d94d9269aa285d77"],["/2018/07/04/Android的GreenDao笔记/index.html","5ea8cfb2c19232a66a6757b32055e9ea"],["/2018/07/15/树莓派使用日志/index.html","768d58f2e01b0ac79289e6e7c6894b70"],["/2018/07/15/树莓派使用日志/usb1.jpg","298f474c17f36c3cbe06e321821839d6"],["/2018/07/15/树莓派使用日志/vnc.jpg","47f282cd0b8cf1d42187ee203a204dfe"],["/2018/07/15/树莓派使用日志/vnc2.jpg","acf8fe4ddcba2a668f8cbf963f53ae8f"],["/2018/07/21/Java的反射与注解/f1.jpg","64132c805bb4e80400b0963d70ceb392"],["/2018/07/21/Java的反射与注解/f2.jpg","124c3de25a84f3d23fd0ec0f4f8c19fa"],["/2018/07/21/Java的反射与注解/f4.jpg","bdc07dfffc1b086dba363f54fe8a4727"],["/2018/07/21/Java的反射与注解/f5.jpg","eded410fc07761651bc07feb4b74a8b4"],["/2018/07/21/Java的反射与注解/f6.jpg","592483c81bad6c1948b68bb1beaddf61"],["/2018/07/21/Java的反射与注解/f7.jpg","919cdd4a78449826677e9197758d5f11"],["/2018/07/21/Java的反射与注解/f8.jpg","9d6ce766ec6a3421375f682200c34a81"],["/2018/07/21/Java的反射与注解/f9.jpg","88b86885c932d3c6865481b4bc411b55"],["/2018/07/21/Java的反射与注解/index.html","567cd99e35373d339393fa8b6956a8f5"],["/2018/07/29/MySQL的一些记录/index.html","89cba90f382c22bd66f4ebfe3382a296"],["/2018/07/29/MySQL的一些记录/m1.jpg","32adb1408737c7301666100f73256b6e"],["/2018/07/29/MySQL的一些记录/m10.jpg","043c4d5e41a3edd594cfa9b562e1c597"],["/2018/07/29/MySQL的一些记录/m2.jpg","a749b197e706bbef57757d6de6296104"],["/2018/07/29/MySQL的一些记录/m3.jpg","b72e05b7dbfe455f0a679f2866a128c3"],["/2018/07/29/MySQL的一些记录/m4.jpg","bfcc96c9a7e73bc511b1d4a98e058c16"],["/2018/07/29/MySQL的一些记录/m5.jpg","0efe66139d0057a636c589996cabd5bc"],["/2018/07/29/MySQL的一些记录/m6.jpg","af346a61c9ce656b584a5b6c9c3e32ea"],["/2018/07/29/MySQL的一些记录/m7.jpg","76dd372928c43bd026af2aac55474059"],["/2018/07/29/MySQL的一些记录/m8.jpg","a76576f5b9b7afbe73ae51219f25ddbe"],["/2018/07/29/MySQL的一些记录/m9.jpg","e9e7a1474316930b2b5da6ae8c1f880c"],["/2018/08/18/weex混合开发的一些记录/index.html","7d113a12b5f66e1b50e6b7399e889dad"],["/2018/08/19/网站前端的一些记录/css1.jpg","2c96c11a18b9f693cf93c4fc8f311219"],["/2018/08/19/网站前端的一些记录/css2.jpg","4c85b370f42d1544a499d40249819dcb"],["/2018/08/19/网站前端的一些记录/css3.jpg","a03790582126606827aa595ed261f1ca"],["/2018/08/19/网站前端的一些记录/css4.jpg","7db63a1c446b3add72b266375905f506"],["/2018/08/19/网站前端的一些记录/index.html","937b68acc80882350d0fe02aee99f481"],["/2018/09/24/Android的AOP编程/a1.jpg","e3320b7400902b29daaabf82a0f8433a"],["/2018/09/24/Android的AOP编程/a2.jpg","c6a933b92e9fe8f3fe1e9d104de5ef2b"],["/2018/09/24/Android的AOP编程/a3.jpg","ea7405dfdcb3bcdf84bdd67fef9665ee"],["/2018/09/24/Android的AOP编程/index.html","8becda42ff8865acca831a3e3d74a2f7"],["/2018/09/24/线性代数/index.html","c2cb9c8421e5b107cd2ddcef54fcfd6f"],["/2018/10/06/kotlin的笔记/index.html","ebb9f25fa8cbb9bf8247da4f8e7efa24"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c0.jpg","3e9250998bcae8ec8bf38e962a4eb09e"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c1.jpg","80a7110fcfd46636b0eb48634b68da73"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c2.jpg","5ccdb51eb9e2728752d1e4e5c11cec3e"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c3.jpg","44717861ced23c5627de2999fa2756eb"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c4.jpg","cd96746ebbf2537c9412601d6d802e02"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f0.jpg","522f86b000e9a0ddea86edfe4fde6f24"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f1.jpg","f0c7cd148f606ac0700ec90205be51de"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f2.jpg","5cad1bb88892da34d8222ff50dec1e36"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f3.jpg","a892e313628197cc4823b59992565576"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f4.jpg","34ef5afd456167e41cde6cc29ebf8bae"],["/2018/11/17/ConstraintLayout和FlexboxLayout/index.html","6f27d42e58cf06590eb71134d684f112"],["/2019/02/01/Android传统蓝牙与低功耗蓝牙/b0.jpg","68eaadb373ebe4b890aaa61574677edb"],["/2019/02/01/Android传统蓝牙与低功耗蓝牙/b1.jpg","8d620f9fbf709f2e5386a54963adb511"],["/2019/02/01/Android传统蓝牙与低功耗蓝牙/b2.jpg","d5586188b2031542c3e7e984183fbbc9"],["/2019/02/01/Android传统蓝牙与低功耗蓝牙/index.html","7448aac1f6bd1a42cdc2e5c8e090ec33"],["/2019/03/07/几种常用的设计模式的笔记/1.jpg","5d99ffece366b613684e7e870ec608cf"],["/2019/03/07/几种常用的设计模式的笔记/2.jpg","ca6bb370a45ecd7babc402ef2bba0310"],["/2019/03/07/几种常用的设计模式的笔记/3.jpg","41a0e3686ec44fd05cb5c9ec8e9618ce"],["/2019/03/07/几种常用的设计模式的笔记/4.jpg","47e571a32b51d28164e36a3e45732c70"],["/2019/03/07/几种常用的设计模式的笔记/5.jpg","df0917aa00161c5b44049752cbd968be"],["/2019/03/07/几种常用的设计模式的笔记/6.jpg","91bba768f0085d14e91e2f1d5309f5c2"],["/2019/03/07/几种常用的设计模式的笔记/7.jpg","a4224281647af2937b7bcf6b3af2d0ae"],["/2019/03/07/几种常用的设计模式的笔记/index.html","cbc1f0a07e7010c1c9cb7c48ed9e7ad1"],["/2019/03/07/几种常用的设计模式的笔记/r1.png","a5211e974edd613583a510958a1dd75f"],["/2019/03/07/几种常用的设计模式的笔记/r2.png","368b382d4454b30f25808a747e24119e"],["/2019/03/17/位运算复习/index.html","bf04800ede42a24bf3608bf0d288b035"],["/2019/04/06/Android-5-x中-UsbDevice-mInterfaces为空的解决方法/index.html","bf85bddefb3f73c6171cf90962ef6189"],["/2019/04/14/Android-缓存笔记/index.html","7e969e7d190164f6de988154ceef02a7"],["/2019/04/21/c语言回顾/index.html","6768bdb4dd070fb2b9901ea8ad208f3e"],["/2019/05/03/Java-只有值传递/index.html","6983fcdc7d81155de916309438d4be5d"],["/2019/05/03/Java-只有值传递/j.jpg","d7514977bbedbb72eb59c7c776eac978"],["/2019/07/14/smali语法笔记/index.html","458e9c76d59d1e243fe597684118420c"],["/2019/10/03/linux基本操作笔记/index.html","31e58e2447870069586b21b3bc44474d"],["/2020/01/04/Android自定义view-测量与布局/index.html","df3c8b7103c362f5438ad037d64b5e62"],["/archives/2016/10/index.html","0afe6b54b086a7899a982942a19ba1e4"],["/archives/2016/index.html","12f93a5064f92b15bdbe24d646ddbe35"],["/archives/2017/01/index.html","c5ff6aa4e24297c855b8d7ee0b6c6bbc"],["/archives/2017/02/index.html","a82390d79d0baede02a7f46bc7d3d155"],["/archives/2017/03/index.html","0fcdf8af805c6a838e82fef0e7416720"],["/archives/2017/04/index.html","6f0389fb87b7cb3695cbf62aa604e50c"],["/archives/2017/05/index.html","968d570e8bcea28d0fc8d020362ea906"],["/archives/2017/06/index.html","88338b58dc2e719c3a6d257660cc1e24"],["/archives/2017/07/index.html","5dc8549f1b5e5a071981db4625e464c6"],["/archives/2017/08/index.html","0f0230a0733996866f3b784cb5add7ae"],["/archives/2017/09/index.html","75859c15e390f34ad8f52f1493270e57"],["/archives/2017/index.html","a63009ec7bc8144d77f26844398d03f3"],["/archives/2017/page/2/index.html","dcd5699d9f112b3c0df9f278b716335a"],["/archives/2017/page/3/index.html","edfe59cd12871f9e7f958a79def007d3"],["/archives/2017/page/4/index.html","ef56ffd4822c124b611d6b3a81b0aaab"],["/archives/2018/01/index.html","74c11fa9ad1d4555296e085b26a40e37"],["/archives/2018/02/index.html","a65daeeaa1afc07e70c3144bcce2c639"],["/archives/2018/03/index.html","6e67206203813e58a30f72ad07fd9053"],["/archives/2018/04/index.html","de4ba3686000f749effe4192b4af9eca"],["/archives/2018/06/index.html","cb8eb32fc34f6382b05af137a29add9e"],["/archives/2018/07/index.html","2b2591a54f84952c584a838955d6f16c"],["/archives/2018/08/index.html","253b5837d254c2710cc64cac8c4447be"],["/archives/2018/09/index.html","ec9d008533d984851ff7088ea413e470"],["/archives/2018/10/index.html","d3a76025e8513c47788a5626b2520b96"],["/archives/2018/11/index.html","698f055af859452694cb6271ad427434"],["/archives/2018/index.html","73bec2dae93d0f8a0097ac3aa7d08ebf"],["/archives/2018/page/2/index.html","4c6f05d8eb196892165aa1a13a49c541"],["/archives/2018/page/3/index.html","7d6dfd04e89bd19acfd82ab75830af49"],["/archives/2019/02/index.html","dc133740b16761b6a9ec780b8662a7a1"],["/archives/2019/03/index.html","e81ec95de3d3a956bc5c2a354880d143"],["/archives/2019/04/index.html","740632227c2e4b37f6c2e31877238bbc"],["/archives/2019/05/index.html","9f4e59f5b6d5315f2843699d7da6fee2"],["/archives/2019/07/index.html","3a0b3530f255acf7af02d897c93d0577"],["/archives/2019/10/index.html","2e9f21b66ec9bf815e017d2cac477e2b"],["/archives/2019/index.html","bdc3ad8ff9595679ea1f466a7508261f"],["/archives/2020/01/index.html","c71250805e1ec152a2d1aff7fb2f0e24"],["/archives/2020/index.html","719dbf6d193e29bd8733e61dc325f62d"],["/archives/index.html","4987568af0950d52e20fa32b656ff705"],["/archives/page/2/index.html","f995fab44e993e7cc63ea275eae645a8"],["/archives/page/3/index.html","8cb85231ab798e36b7000c3cb42ec8d6"],["/archives/page/4/index.html","dc7084c987a126b79cd6c51bcac1019f"],["/archives/page/5/index.html","de84640dc047f0902036625b13dd0254"],["/archives/page/6/index.html","f6d886071de0b4e8dbd78be566121d06"],["/archives/page/7/index.html","e2a2800cc3b2b158e50ab0295a87685c"],["/assets/css/DPlayer.min.css","342ea5be98acf2af33342e97b9a5e973"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/css/main.css","453b353a673c9d827fba1eb55b4dcf2f"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/1.jpg","74026237ccdeaf9d93b3ceb5ed10ccad"],["/img/yufa.png","8719de11346fe52ed128e85324096dfc"],["/index.html","a2d32ff4d8b4fa0f38fa6940805354cd"],["/js/src/affix.js","5789a14999908bf19dc61366de339491"],["/js/src/algolia-search.js","cdd5224a2a0c32f7871bde444732e915"],["/js/src/bootstrap.js","fd0e31e2d35eb0ef2c14ef15aa0f64cd"],["/js/src/exturl.js","96506da622e6ce9d83b35eb8ff0495c6"],["/js/src/js.cookie.js","3d046d51bd850c4583a872b430ccd344"],["/js/src/motion.js","ce30b6562f0d90d0e872d9f68d913182"],["/js/src/post-details.js","6dd103dd60dcf74241870d8e1963ac58"],["/js/src/schemes/muse.js","9dd5728a150bb2d44ccb12b36a96cb3f"],["/js/src/schemes/pisces.js","308af66c33ef1447c2a0742933b68fb2"],["/js/src/scroll-cookie.js","878ca42a0afadd8fdd10593513805e22"],["/js/src/scrollspy.js","4446e35ed870854eec108f197ee3210e"],["/js/src/utils.js","1a2c56c6f1ad910b58c348be6d2b3062"],["/lib/canvas-nest/README.html","b200373b7cb99beedd0c70a9e2997789"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","93bd178130cc5e0c78700c56be02c590"],["/lib/reading_progress/README.html","a8cd5933e1a0047ca5345bea00034ade"],["/lib/reading_progress/reading_progress.js","80f910f702c462e90c54154851063f55"],["/lib/reading_progress/reading_progress.min.js","dd4f298c9228f42432e143f190ee03f5"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5f7794caf645208cdac41644988500f2"],["/lib/velocity/velocity.js","941752683d82c0ed1ede5e6c53460698"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","02ab9cb4a1942467492b15a6eb692975"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/2/index.html","9baf0b4083c36d5101cb3c24bd007874"],["/page/3/index.html","b04eb8ac976fbf8077e5caf4be293a7b"],["/page/4/index.html","b8ee9364cf9f06189de11516410b2c4f"],["/page/5/index.html","2488a5602a8f14ec6c87ad4226e6c1ca"],["/page/6/index.html","15532523416257851fe7a001ca7ca6b6"],["/page/7/index.html","d6d9e0a58640aa0ed790329907f363d7"],["/sw-register.js","046c10a2e56e02468360d573f77a6a98"],["/tags/Android-串口/index.html","e355fa10132e5ab6ee6e726198199d31"],["/tags/Android-数据库/index.html","70b495237b1ee382fd6a7fb856c16ff6"],["/tags/Android-蓝牙/index.html","5236b8383f94fa7236952bf1e8fb4bb7"],["/tags/Android/index.html","7c85f70f5c6fad71e582860b7a171227"],["/tags/Android/page/2/index.html","70260caa65d2839a663d44d204b94211"],["/tags/Android/page/3/index.html","9007b7c3410a0798364dd330a9cad324"],["/tags/Android安全/index.html","94fc92b3beb63be434209a092e37e4b8"],["/tags/Android布局/index.html","edc760601dd836aba8ab208eb96703bd"],["/tags/Android系统/index.html","ff66fd118cf58e8efbbd385fe38bc36b"],["/tags/Java笔记-设计模式/index.html","ea5aab57c0d40f139112fce1744ba3a1"],["/tags/Java笔记/index.html","af7892f9333a791827b66b4422302a39"],["/tags/Kotlin/index.html","ee093f2d3c37594a79731c1a615cb493"],["/tags/Python/index.html","05d4b0aa109dd1e33f5a47b9490c4abb"],["/tags/c语言/index.html","2c8aa69f20a6a61052d648dff8d19894"],["/tags/git/index.html","e918d3b0eb5eda16726879b89031eb9f"],["/tags/index.html","3b8a77351931f53738e51870e642e13c"],["/tags/linux/index.html","8f8aa6836ae3163b29c49707098ee3bd"],["/tags/weex/index.html","9413cfe1aaadc06b99df2664cb888864"],["/tags/京东/index.html","0e892770f34c4154810102b3dc8e3617"],["/tags/位运算/index.html","97939483ea1f1b8b6d65a248767daad1"],["/tags/大新闻/index.html","c9125491956bdae3f27862e20205dd40"],["/tags/数据库-MySQL/index.html","44dd5b032fda301cbb53e71d7f027c25"],["/tags/树莓派/index.html","809a6ddd6a3ced811f0906fc6d4b66bc"],["/tags/线性代数/index.html","25273cb833997efc094744c8037a83ee"],["/tags/缓存/index.html","130eb0d078588b742f42723943c479f5"],["/tags/网站前端/index.html","d5c3b3f1fa19b4eae72c69c2dd90a931"],["/tags/翻墙/index.html","b2910196aa717e8a7cc2902bfa0d61d3"],["/tags/自定义View/index.html","c49636efb7c8821cef34d941020ca5b9"],["/tags/面向切面-AOP/index.html","c8d0a7ba3adfd94552dc75eb3eaf63f9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
