/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/10/29/hello-world/index.html","1979e7f2a0107e220d5cc1a1192c3278"],["/2017/01/06/markdown语法/index.html","e4f34be55947c5418bad86be7b7ebd24"],["/2017/01/06/markdown语法/yufa.png","8719de11346fe52ed128e85324096dfc"],["/2017/01/06/好久不见/index.html","377c4425c70190c5be2606a8aae2066f"],["/2017/01/07/弄个大新闻/index.html","e0fea19f4cccdc7b48e20127b53ad571"],["/2017/01/08/总结/index.html","9db9d6a13d6974dfb80aca67490df8bb"],["/2017/01/12/Android传递简单数据的方法/index.html","dbe986d394b0340623e43e67446390d7"],["/2017/01/13/为什么静态方法不能直接访问非静态成员/index.html","6d2969576af65124a007d737a218f54a"],["/2017/01/16/关于京东抢优惠券的思考/index.html","7dbdded550c4bca2cd6fe6af36b22b5b"],["/2017/01/16/关于京东抢优惠券的思考/jd1.jpg","5f53c9970a59051c586a309142a2de89"],["/2017/01/16/关于京东抢优惠券的思考/jd11.jpg","f205e05055fe185913515c68a9e0a2d2"],["/2017/01/16/关于京东抢优惠券的思考/jd12.png","0facb5005bb7157736b2037c2a84a740"],["/2017/01/16/关于京东抢优惠券的思考/jd2.jpg","84d68abd09cfa889288d405b03c70192"],["/2017/01/16/关于京东抢优惠券的思考/jd233.jpg","4f67d6ca29dff1779f2a35a5dc63106f"],["/2017/01/16/关于京东抢优惠券的思考/jd3.jpg","33078c6902bfcffa6add5c4fa9d8256f"],["/2017/01/16/关于京东抢优惠券的思考/jd4.jpg","61d8efc5e1ba21f8c014c367d346ad7e"],["/2017/01/16/关于京东抢优惠券的思考/jd5.jpg","8dc31cc4a89da7d1684f876a314bcf76"],["/2017/01/16/关于京东抢优惠券的思考/jd6_1.jpg","cdc1275b246a794923192a08ae2399f7"],["/2017/01/16/关于京东抢优惠券的思考/jd6_2.jpg","92a04f119f911ba8d0a699d7ffcb2e63"],["/2017/01/16/关于京东抢优惠券的思考/jd7.jpg","0da09824149c792e122b87c441bf1eb8"],["/2017/01/16/关于京东抢优惠券的思考/jd8.jpg","b29ba362ff85e1b43422ae3269d37975"],["/2017/01/16/关于京东抢优惠券的思考/jd9.jpg","9e7e3ada8894616aae0f183fe88d2b11"],["/2017/01/24/Android的数据库/hj.jpg","a05bb14dcd21ab3118bfba37d9335359"],["/2017/01/24/Android的数据库/index.html","a54824b46acc0d39d5e997f8cefb6994"],["/2017/01/24/Android的数据库/l1.jpg","7e69e703c1d74d5bb2a851a29311615c"],["/2017/01/24/Android的数据库/l2.jpg","aeff5509e3d17ce0a404e0fc4de5c9fa"],["/2017/01/24/Android的数据库/l3.jpg","700b7ecb4c4ea5a92de247ef192c7f37"],["/2017/01/24/Android的数据库/sync.jpg","e03b62c7a05f2316dc86753420507b46"],["/2017/01/26/Java泛型笔记/index.html","3903d04b7b7815bf067ce61235ee4e52"],["/2017/01/27/单例模式/index.html","f6341f4c4448e22d0446328ee2f7e5df"],["/2017/02/01/简易翻墙的方法/f1.jpg","2581d86292ab9052514aee9fd91f3b8f"],["/2017/02/01/简易翻墙的方法/f2.jpg","9e109c806a7fe69b9aad81ff3f2b9906"],["/2017/02/01/简易翻墙的方法/index.html","30a58ca7731fb855ef8aaafabce5259f"],["/2017/02/01/简易翻墙的方法/使用方法.jpg","7f6d9b70c529784a4deaec93c7e3b8bc"],["/2017/02/04/Android通知栏的微技巧-转/Android通知栏.png","a7c8b4417475b4d15f248e9aacb74350"],["/2017/02/04/Android通知栏的微技巧-转/index.html","098a03fc99fb7e05696eb54c52a4f444"],["/2017/02/05/Android的RecyclerView/index.html","fdbcdba5c3aef4b100fa224e0f407bb0"],["/2017/02/05/Android的RecyclerView/r1.jpg","9eeec54207d455491e0b8e08e5df24dd"],["/2017/02/05/Android的RecyclerView/r2.jpg","973a10b7b0ac96ab5abb064141ad4613"],["/2017/02/05/Android的RecyclerView/r3.jpg","bc1e15be3106cbcf6e9beef4be22734b"],["/2017/02/12/Android解析json的方法/face.jpg","d1d4e6a3140cdcc50979d31cb72c1f15"],["/2017/02/12/Android解析json的方法/g1.jpg","71820d6dedf01e29832e8e2f0508ae7a"],["/2017/02/12/Android解析json的方法/g2.jpg","5c90926ac82dcbd1d3cc404e3e8aa32f"],["/2017/02/12/Android解析json的方法/g3.jpg","4c166816b8974b811aa38862b01c1919"],["/2017/02/12/Android解析json的方法/index.html","108c4ebee2c3d1324a49de2bb4edffb7"],["/2017/02/12/全局获得Context的方法/index.html","aaaac15738490e81d6a4238c58b877c7"],["/2017/02/13/利用SharedPreferences存储用户名密码/face.jpg","492244640fbf7e3e850308b7cd549064"],["/2017/02/13/利用SharedPreferences存储用户名密码/index.html","fae47557a296495c36b0980d684de1ae"],["/2017/02/21/Java的io流笔记/face.jpg","cddb614ef8ea50373f7dab5e261e88e0"],["/2017/02/21/Java的io流笔记/index.html","74dfbdcf5047e108fb839a6833444c5c"],["/2017/02/24/装饰模式/index.html","4acf470b236781edb2b5774390a50477"],["/2017/02/24/装饰模式/z1.jpg","1caaff9830cfca6d1c0a6d44b634ea1d"],["/2017/02/24/装饰模式/z3.jpg","4c14ce42eeca00bfc1820bcf486abd42"],["/2017/02/26/Java的线程笔记/index.html","b525781b11c948c953205d7cd640582f"],["/2017/02/26/Java的线程笔记/t1.jpg","531ac5ab216b6c62835ba8185a06c53b"],["/2017/02/26/Java的线程笔记/t2.jpg","f9f57bcceba663fed989ec61288d3387"],["/2017/02/26/Java的线程笔记/t3.jpg","3d31a7efb1ed0416d0e957ca4df385e3"],["/2017/02/26/Java的线程笔记/t4.jpg","32d0c8e35cc2db2236efe845622474a7"],["/2017/02/26/Java的线程笔记/t5.jpg","178da46132727f9a2c373d7a39c497c2"],["/2017/02/26/Java的线程笔记/t6.jpg","3ae197d34b60b3d74202e18804bcbca7"],["/2017/02/26/Java的线程笔记/t7.jpg","0ad16bd8e4ef1ba3e133736b9a88fedf"],["/2017/03/30/Android的NavigationView获取headerLayout组件的方法/index.html","f9b55a16c6f032515769f7db5dd634fd"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/face.png","c9b98aefb439fa04e587d2ee5bacf0a9"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/index.html","e1374c4e8a67874f4dfd1783e716e908"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/o1.jpg","dab5e6b0ac04c512bd8521e73f57b317"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/o2.jpg","ef761bfc2b3b095d2f978e6973e20fc0"],["/2017/04/30/mvp和mvvm框架笔记/index.html","7885f8d15dc12ad5123a3cc2132ae05e"],["/2017/04/30/mvp和mvvm框架笔记/mvp.jpg","bf7bf997af33fddd6c725348fb220b11"],["/2017/04/30/mvp和mvvm框架笔记/mvvm.jpg","84e8ac6f4173febb3abef819c6847c1c"],["/2017/05/11/Android的fragment页面切换优化笔记/index.html","0e6822e941b22922b175829503f4a291"],["/2017/06/15/Retrofit2笔记/index.html","042b6b522211dfd6566317e1601136ca"],["/2017/07/01/android开发艺术探索笔记/b1.jpg","a1a8c64e3f734b73f77268b8fc5f2b1f"],["/2017/07/01/android开发艺术探索笔记/b2.jpg","b307f466aed09d6c457e9f67ab029e55"],["/2017/07/01/android开发艺术探索笔记/b3.jpg","3e0b93a47b78d6d7ddbe37ce5c23388e"],["/2017/07/01/android开发艺术探索笔记/b4.jpg","d96cc8947bc932eadb35752b7d446aea"],["/2017/07/01/android开发艺术探索笔记/b5.jpg","87df47140a9a2340a7fe71640e81359e"],["/2017/07/01/android开发艺术探索笔记/face.jpg","54a7967ae6523116af00474944595736"],["/2017/07/01/android开发艺术探索笔记/index.html","20c0b45e888b2564317d933b3c0126f9"],["/2017/07/01/android开发艺术探索笔记/s11.jpg","44ecc475fc71d4f1324700e2cdc3e537"],["/2017/07/16/代理模式/d1.jpg","c3b222d9b50571a393cf86fe466bee03"],["/2017/07/16/代理模式/d2.jpg","025c9760e4eb8c99cb52344d3e5af608"],["/2017/07/16/代理模式/index.html","41a367cc54c8d08f7f7e2808053686af"],["/2017/07/19/BroadcastReceiver广播/g1.jpg","95acdfb4d5fc9a495a5ae576c98b286a"],["/2017/07/19/BroadcastReceiver广播/index.html","a26124bc1716d594d3723cd0aab431b5"],["/2017/07/21/git与github快速入门/face.jpg","127e571d0e61487c6863a02f516a0cda"],["/2017/07/21/git与github快速入门/g1.jpg","16340b4a74d0bf17ab65f5ced4999896"],["/2017/07/21/git与github快速入门/g2.jpg","a6fae17935f965048679c70c04c6205a"],["/2017/07/21/git与github快速入门/g3.jpg","0f7aac4cc7e33b5c751c918d99b10711"],["/2017/07/21/git与github快速入门/g4.jpg","709037e4cccf6e25c3115eb6c2fc581c"],["/2017/07/21/git与github快速入门/g5.jpg","f9a4549ae09c867c1bfe160f2737429d"],["/2017/07/21/git与github快速入门/g6.jpg","11fcb2a3b2a0fda51c3ae1195c64bf02"],["/2017/07/21/git与github快速入门/git.jpg","f81f175b2aa60accc5be3d2938443733"],["/2017/07/21/git与github快速入门/git1.jpg","8f95b15144b6a86f51d2269957f3240e"],["/2017/07/21/git与github快速入门/git2.jpg","309085d23b2601d757722c8e87372b7a"],["/2017/07/21/git与github快速入门/index.html","6ee3db7fe8a59455b835100a3b75336e"],["/2017/07/21/git与github快速入门/study.png","2075a23765cb6faa00fb5d9bedaf8fa4"],["/2017/07/24/Android-Butter-Knife-框架/b1.jpg","925e050934ad31922e1c83a42c26b714"],["/2017/07/24/Android-Butter-Knife-框架/b2.jpg","0eff5cb764d652afe3fb32f7960ae103"],["/2017/07/24/Android-Butter-Knife-框架/b3.jpg","c8252248c54856bbf498f781be4907fb"],["/2017/07/24/Android-Butter-Knife-框架/b4.jpg","ae76887599574d57a58d5972fadf7a6c"],["/2017/07/24/Android-Butter-Knife-框架/index.html","ae704d7355735ae231fb355cd07407b1"],["/2017/07/31/一些android笔记/b1.jpg","925e050934ad31922e1c83a42c26b714"],["/2017/07/31/一些android笔记/b3.jpg","c8252248c54856bbf498f781be4907fb"],["/2017/07/31/一些android笔记/ba1.jpg","943ee61e81f33fcc4dd4018ca62fc129"],["/2017/07/31/一些android笔记/c1.jpg","2a4a4900587a645d8a0f9a7790de477c"],["/2017/07/31/一些android笔记/index.html","9ab8b98566812d00e77469a2e63bdd9d"],["/2017/07/31/一些android笔记/s1.jpg","cb3b9d67f22c02d636b12be452c13922"],["/2017/07/31/一些android笔记/s2.jpg","8fb37f9f69865a66b7c7f2a1afd0c2ae"],["/2017/07/31/一些android笔记/sb1.jpg","fb76380ff9a028e42df8490ff5c28c9b"],["/2017/07/31/一些android笔记/sw1.jpg","d5f4e22f98750e34139e8ed06bfa0418"],["/2017/08/04/Android动画笔记/index.html","c5bafd744719103bf8ac901ba519e4cf"],["/2017/08/09/Android-布局复习/c.gif","7e34c56d6324226c2b57dce7a28f289f"],["/2017/08/09/Android-布局复习/g1.jpg","2e7c78a7bdc1211318f1a7314bbe80e2"],["/2017/08/09/Android-布局复习/g2.jpg","f0d24aee0759cd18a0310baace202764"],["/2017/08/09/Android-布局复习/gr1.jpg","8cdfa1fbbfdb2accb783346fbf3f673f"],["/2017/08/09/Android-布局复习/index.html","57b31c218668236c4af77713fd620c1e"],["/2017/08/09/Android-布局复习/l1.jpg","22739cc4c3d40cc837f53db4c5b1e90a"],["/2017/08/09/Android-布局复习/l2.jpg","6f1efa4f3549c68d6908fa10f9fce87c"],["/2017/08/09/Android-布局复习/l3.jpg","fbfa39bfb0cc0eb0e8536c81ff696bed"],["/2017/08/09/Android-布局复习/r1.jpg","10c4c2cf2114fc08c33ee027a6e5bc2b"],["/2017/08/09/Android-布局复习/r2.jpg","7a0821279b7cfc7929ab734a3fef36cd"],["/2017/08/12/Toolbar的玩法-伪/co1.gif","e17d721c6927df2912720f9d3a0d0e1f"],["/2017/08/12/Toolbar的玩法-伪/co1j.gif","b50f90da72c46dccfe8e09cc725329b1"],["/2017/08/12/Toolbar的玩法-伪/co2.gif","71d3beb19ff87ed9c3a0fbe299ef4f0f"],["/2017/08/12/Toolbar的玩法-伪/co3.gif","63047b639a00bd4154619688d47ed80d"],["/2017/08/12/Toolbar的玩法-伪/co4.gif","e3e6d88fcff064e4f14b1541d776e431"],["/2017/08/12/Toolbar的玩法-伪/coo1.jpg","e3920ef7d5dc14f018fd3dafa390be7e"],["/2017/08/12/Toolbar的玩法-伪/index.html","1df69a5899b1a6cf1fe331061390c329"],["/2017/08/12/Toolbar的玩法-伪/t1.jpg","1688359c4b328ef1907f5c04eb498c75"],["/2017/08/12/Toolbar的玩法-伪/tt1.gif","461d4b8c8c7eeba4985a82fefe6070e0"],["/2017/09/23/RecyclerView动态切换不同布局的方法/b1.jpg","6b48198a8310bcc30059a97ff4b476a3"],["/2017/09/23/RecyclerView动态切换不同布局的方法/b2.jpg","6e59ceeab84d45219df717d324830fcf"],["/2017/09/23/RecyclerView动态切换不同布局的方法/cd.jpg","888843d84f1ba2f774ab5c25536574f6"],["/2017/09/23/RecyclerView动态切换不同布局的方法/index.html","db175a45daa916c00c28ebf03f3f5a25"],["/2017/09/23/RecyclerView动态切换不同布局的方法/r1.jpg","5aa90d955fd77d28573e2b4538f4f0f4"],["/2017/09/23/RecyclerView动态切换不同布局的方法/r2.jpg","90fdd8ba0112794b5a5fe45db82fb5f9"],["/2017/09/23/RecyclerView动态切换不同布局的方法/r3.gif","889b392ff2e5eb80068dbf6f9566f27d"],["/2018/01/14/电锯惊魂8/index.html","fd62869ba64adf6ecc46a1b027679d72"],["/2018/02/15/java细节笔记/face.jpg","4b85f92e1478a12013808e44a9fa1fc7"],["/2018/02/15/java细节笔记/index.html","4b8a5f70c3c5c10b65ef70ef2921efa9"],["/2018/02/15/java细节笔记/java1.jpg","d2b4a31471061ae91bfe7ae06686951d"],["/2018/02/15/java细节笔记/java2.png","ed41928f8bbcb700483c50bc356b5de9"],["/2018/02/15/java细节笔记/java3.jpg","19ae81b450121dde484b47c6b6bc8428"],["/2018/02/15/java细节笔记/java4.jpg","fdc54faed81f01ff31eccd949cbb3301"],["/2018/03/04/Android-自定义View的探索/index.html","4c77d134d6c3ef94f5f932ae9e1fd00e"],["/2018/03/09/Android的Drawable/index.html","1b16a3ac30cbc248a32555c296d7aad9"],["/2018/03/09/Android的悬浮窗/index.html","8e7849f3d0f8302760611de3e1112b0a"],["/2018/03/09/几种常用的设计模式的笔记/index.html","bbb813dbf81b4cb171dfd6657c61c537"],["/2018/03/13/Android常用的ViewPager/index.html","db9580eb1ff171523ec301660ff88da2"],["/2018/03/19/python-入门笔记/index.html","dd694a31291aab944ff69e17e6dae0fa"],["/2018/03/19/python-入门笔记/p1.png","63a8f0765f53686f359ac0a4a67ae314"],["/2018/03/19/python-入门笔记/p2.png","35fd4e9069231985f562f00455e97dba"],["/2018/03/19/python-入门笔记/p3.png","db283f7ef59ee5e912c5ae2082a33879"],["/2018/03/19/python-入门笔记/p4.png","93b9747abad3d81214b710e9a9d125a7"],["/2018/03/19/python-入门笔记/p5.png","139f53c418f4262b9443467124c05154"],["/2018/03/19/python-入门笔记/p6.png","4867a70e9dcc618337fe418fccad0e45"],["/2018/03/19/python-入门笔记/p7.png","1b84fff5456b5df9b5eaa67385415ff1"],["/2018/03/19/python-入门笔记/p8.png","d18cf77bf770bdc42eb4d7fb16f70ef5"],["/2018/03/19/python-入门笔记/p9.png","fa7d751e8929d604a937937c2f87bfc5"],["/2018/04/09/Android的运行时权限/index.html","3f867141bf7aedd230ef1a1ace9acdf3"],["/2018/04/09/Android的运行时权限/permission.png","361227ac9b061134f1e00bb0c8e4c637"],["/2018/04/22/正则表达式笔记/index.html","d42dd760fe4f2e4d131667daabffacfd"],["/2018/06/10/Android串口开发的一些事/index.html","1be08d33b66c9b3ea504ce927b0a41de"],["/2018/06/10/Android串口开发的一些事/p.png","e40d530a6b1f0b49186dac2335a9a18c"],["/2018/06/23/Android的RxJava笔记/index.html","0adf71d4ddd0d2941d2e8bb70e4c3da7"],["/2018/06/23/Android的RxJava笔记/r1.png","a5211e974edd613583a510958a1dd75f"],["/2018/06/23/Android的RxJava笔记/r2.png","368b382d4454b30f25808a747e24119e"],["/2018/06/23/Android的RxJava笔记/r3.jpg","dea1e0d7a40dbf8034d2ff532a0b120e"],["/2018/06/23/Android的RxJava笔记/r4.jpg","c551db9622f9bcc9d94d9269aa285d77"],["/2018/07/04/Android的GreenDao笔记/index.html","9dc4692f0c44db303d6d47a2a6895ca3"],["/2018/07/15/树莓派使用日志/index.html","630b136fb3cb4a8e02710782072f92aa"],["/2018/07/15/树莓派使用日志/usb1.jpg","298f474c17f36c3cbe06e321821839d6"],["/2018/07/15/树莓派使用日志/vnc.jpg","47f282cd0b8cf1d42187ee203a204dfe"],["/2018/07/15/树莓派使用日志/vnc2.jpg","acf8fe4ddcba2a668f8cbf963f53ae8f"],["/2018/07/21/Java的反射与注解/f1.jpg","64132c805bb4e80400b0963d70ceb392"],["/2018/07/21/Java的反射与注解/f2.jpg","124c3de25a84f3d23fd0ec0f4f8c19fa"],["/2018/07/21/Java的反射与注解/f4.jpg","bdc07dfffc1b086dba363f54fe8a4727"],["/2018/07/21/Java的反射与注解/f5.jpg","eded410fc07761651bc07feb4b74a8b4"],["/2018/07/21/Java的反射与注解/f6.jpg","592483c81bad6c1948b68bb1beaddf61"],["/2018/07/21/Java的反射与注解/f7.jpg","919cdd4a78449826677e9197758d5f11"],["/2018/07/21/Java的反射与注解/f8.jpg","9d6ce766ec6a3421375f682200c34a81"],["/2018/07/21/Java的反射与注解/f9.jpg","88b86885c932d3c6865481b4bc411b55"],["/2018/07/21/Java的反射与注解/index.html","34fe25bd8581609ddb1bc77348c44d85"],["/2018/07/29/MySQL的一些记录/index.html","ca56f87197eea30442f6188eb88a57d5"],["/2018/07/29/MySQL的一些记录/m1.jpg","32adb1408737c7301666100f73256b6e"],["/2018/07/29/MySQL的一些记录/m10.jpg","043c4d5e41a3edd594cfa9b562e1c597"],["/2018/07/29/MySQL的一些记录/m2.jpg","a749b197e706bbef57757d6de6296104"],["/2018/07/29/MySQL的一些记录/m3.jpg","b72e05b7dbfe455f0a679f2866a128c3"],["/2018/07/29/MySQL的一些记录/m4.jpg","bfcc96c9a7e73bc511b1d4a98e058c16"],["/2018/07/29/MySQL的一些记录/m5.jpg","0efe66139d0057a636c589996cabd5bc"],["/2018/07/29/MySQL的一些记录/m6.jpg","af346a61c9ce656b584a5b6c9c3e32ea"],["/2018/07/29/MySQL的一些记录/m7.jpg","76dd372928c43bd026af2aac55474059"],["/2018/07/29/MySQL的一些记录/m8.jpg","a76576f5b9b7afbe73ae51219f25ddbe"],["/2018/07/29/MySQL的一些记录/m9.jpg","e9e7a1474316930b2b5da6ae8c1f880c"],["/2018/08/18/weex混合开发的一些记录/index.html","8b78eac8f7f58b9c8c5853c0775a0ade"],["/2018/08/19/网站前端的一些记录/css1.jpg","2c96c11a18b9f693cf93c4fc8f311219"],["/2018/08/19/网站前端的一些记录/css2.jpg","4c85b370f42d1544a499d40249819dcb"],["/2018/08/19/网站前端的一些记录/css3.jpg","a03790582126606827aa595ed261f1ca"],["/2018/08/19/网站前端的一些记录/css4.jpg","7db63a1c446b3add72b266375905f506"],["/2018/08/19/网站前端的一些记录/index.html","f203135ac03c02fe24f3ba3b20169d9e"],["/2018/09/24/Android的AOP编程/a1.jpg","e3320b7400902b29daaabf82a0f8433a"],["/2018/09/24/Android的AOP编程/a2.jpg","c6a933b92e9fe8f3fe1e9d104de5ef2b"],["/2018/09/24/Android的AOP编程/a3.jpg","ea7405dfdcb3bcdf84bdd67fef9665ee"],["/2018/09/24/Android的AOP编程/index.html","0ee68e5046fcad666ce5492e7ca77e96"],["/2018/09/24/线性代数/index.html","72fb4036990cd826c87138202255bcaa"],["/2018/10/06/kotlin的笔记/index.html","609e09adf87c5f66ec585a7ea06c2052"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c0.jpg","3e9250998bcae8ec8bf38e962a4eb09e"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c1.jpg","80a7110fcfd46636b0eb48634b68da73"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c2.jpg","5ccdb51eb9e2728752d1e4e5c11cec3e"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c3.jpg","44717861ced23c5627de2999fa2756eb"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c4.jpg","cd96746ebbf2537c9412601d6d802e02"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f0.jpg","522f86b000e9a0ddea86edfe4fde6f24"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f1.jpg","f0c7cd148f606ac0700ec90205be51de"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f2.jpg","5cad1bb88892da34d8222ff50dec1e36"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f3.jpg","a892e313628197cc4823b59992565576"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f4.jpg","34ef5afd456167e41cde6cc29ebf8bae"],["/2018/11/17/ConstraintLayout和FlexboxLayout/index.html","94dbde69842ca4e9e1ec8d2b7031cfe2"],["/2019/02/01/Android传统蓝牙与低功耗蓝牙/index.html","e8012adb53a755357db9d9eae34aa9eb"],["/archives/2016/10/index.html","ff1be9ad1f66c6bcc55690454a4f9dde"],["/archives/2016/index.html","f7db38b99fb8f6fd86b7fec8009c589b"],["/archives/2017/01/index.html","5443c76974a4b9f909d0837b683e8d22"],["/archives/2017/02/index.html","2918ee17518e59afd0d3fc0f07f17d7c"],["/archives/2017/03/index.html","8cc75b7051edfb81c135a9fae74b08ac"],["/archives/2017/04/index.html","971e2a6d5cfff0ea7d576a69e2244d2a"],["/archives/2017/05/index.html","809588305b59da6791d75c53bda8181b"],["/archives/2017/06/index.html","2e00e075097dfd81e461000933c658e7"],["/archives/2017/07/index.html","c0f10b6954a1ff67478dbe0e6212ab50"],["/archives/2017/08/index.html","d89a9804eae74a21569293ab4f28914f"],["/archives/2017/09/index.html","384f18c6ec818beac2c6e6f011210d93"],["/archives/2017/index.html","fa3589cda4de9405183490fd375bf614"],["/archives/2017/page/2/index.html","65920535263d998c42b60ebbcdd3b9be"],["/archives/2017/page/3/index.html","c24c30d10edd0f69374eb6e060916c83"],["/archives/2017/page/4/index.html","82fe85f3d4b6801c03fafaab02075945"],["/archives/2018/01/index.html","1b3066dc29ed0bbd1bd6e89cff17c5cc"],["/archives/2018/02/index.html","cb242ab48d564ddf2b22c3c13027d632"],["/archives/2018/03/index.html","99e3e21cf67389b20c20301cd072e20f"],["/archives/2018/04/index.html","bd5c9ff64ae8b11743ef54b696ca6316"],["/archives/2018/06/index.html","8be4ee7e9a7ac37ebb26ace5b0229926"],["/archives/2018/07/index.html","c587bc49416b8cf4626fd870106b0bbb"],["/archives/2018/08/index.html","fb4cf6ca228e6a98e06c7c1b5b04b0cf"],["/archives/2018/09/index.html","f8ab0b9e718f3ae9aac5de459363205d"],["/archives/2018/10/index.html","fa053c6a2c18d04d253a2edce63636c2"],["/archives/2018/11/index.html","979bfa0252b7d69ac236bdce48d389d0"],["/archives/2018/index.html","f9b204f7808e8bedd7e2fb18f6f5ccbe"],["/archives/2018/page/2/index.html","41e0b20f20392c7f2b0d6cf6430b7633"],["/archives/2018/page/3/index.html","569c4c8c1dea5e57fe97006592112e3c"],["/archives/2019/02/index.html","c208139eb816e1593cd261e5a5dd89f9"],["/archives/2019/index.html","225741c4c7c9d392ba6395282fe70543"],["/archives/index.html","77fa2efbf17258f2fb119c73980d77f5"],["/archives/page/2/index.html","36ec7c03021eed46afd2024755926519"],["/archives/page/3/index.html","0a7055a1112c80528704598d3602cb62"],["/archives/page/4/index.html","2fdb3a0f4e383eb1ae79eb707cf0cbaa"],["/archives/page/5/index.html","55c1719f13ebcd2356fdcb7042bbfa70"],["/archives/page/6/index.html","f45298dcbcb4dc2b31f466002bff1aae"],["/assets/css/DPlayer.min.css","342ea5be98acf2af33342e97b9a5e973"],["/assets/js/APlayer.min.js","ad5bb5594ac0e4914886dca451adc2bd"],["/assets/js/DPlayer.min.js","02f28324d0d04165e358b3e2f136d8ff"],["/bundle.js","52fc6be9d5b1b3319a5d5b5f82b199f2"],["/css/main.css","c2873219f491e7855afc600c3b271b5a"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/1.jpg","74026237ccdeaf9d93b3ceb5ed10ccad"],["/img/yufa.png","8719de11346fe52ed128e85324096dfc"],["/index.html","56899996d3acbc27e225e92f80c79540"],["/js/src/affix.js","5789a14999908bf19dc61366de339491"],["/js/src/algolia-search.js","cdd5224a2a0c32f7871bde444732e915"],["/js/src/bootstrap.js","fd0e31e2d35eb0ef2c14ef15aa0f64cd"],["/js/src/exturl.js","96506da622e6ce9d83b35eb8ff0495c6"],["/js/src/instantclick.min.js","2be789a49de88c90afa4bbaf20e3ed79"],["/js/src/js.cookie.js","3d046d51bd850c4583a872b430ccd344"],["/js/src/motion.js","ce30b6562f0d90d0e872d9f68d913182"],["/js/src/post-details.js","6dd103dd60dcf74241870d8e1963ac58"],["/js/src/schemes/muse.js","9dd5728a150bb2d44ccb12b36a96cb3f"],["/js/src/schemes/pisces.js","308af66c33ef1447c2a0742933b68fb2"],["/js/src/scroll-cookie.js","878ca42a0afadd8fdd10593513805e22"],["/js/src/scrollspy.js","4446e35ed870854eec108f197ee3210e"],["/js/src/utils.js","1a2c56c6f1ad910b58c348be6d2b3062"],["/lib/canvas-nest/README.html","b200373b7cb99beedd0c70a9e2997789"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","6d3339390f325119053a129628e07876"],["/lib/canvas-nest/canvas-nest.min.js","359b2ee0ef9086fb01ef76052ce0f728"],["/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","93bd178130cc5e0c78700c56be02c590"],["/lib/reading_progress/README.html","a8cd5933e1a0047ca5345bea00034ade"],["/lib/reading_progress/reading_progress.js","80f910f702c462e90c54154851063f55"],["/lib/reading_progress/reading_progress.min.js","80f910f702c462e90c54154851063f55"],["/lib/ua-parser-js/dist/ua-parser.min.js","13c7320cdfd04b7ff3469a9cf7c5ffe5"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5f7794caf645208cdac41644988500f2"],["/lib/velocity/velocity.js","941752683d82c0ed1ede5e6c53460698"],["/lib/velocity/velocity.min.js","050be545b2ecc6ec39a4e22b5c9141e4"],["/lib/velocity/velocity.ui.js","02ab9cb4a1942467492b15a6eb692975"],["/lib/velocity/velocity.ui.min.js","a5d14b34a778ea20d000f79644988f65"],["/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","740cc2db200a00fe2c4383f5436779c1"],["/live2dw/lib/L2Dwidget.min.js","cde9d802e97b2b05bf4fa4fa3db9a3a3"],["/page/2/index.html","c133f3b955006a4c17ba7391a1d6a06c"],["/page/3/index.html","cd7ba9e64a11c3a1e8887d04b062fa70"],["/page/4/index.html","194bc0f50b410ce205c6e3a8755ea3fc"],["/page/5/index.html","53463ec3ba51bc3d98113f579db71b60"],["/page/6/index.html","2ed0aabeffcf852057c27e20062532f1"],["/style.css","579c1f31dcb76adc54c6fded296960e1"],["/sw-register.js","00832ff25a13f68aefd90c97bf2e0ef5"],["/tags/Android-串口/index.html","a5899e1b2c30056caadc885128edde17"],["/tags/Android-数据库/index.html","576b0595cd8b9c010b65dc8e5853dc02"],["/tags/Android-蓝牙/index.html","41e00a4fe072d0255205a70e91fdc987"],["/tags/Android/index.html","f7444912c2df9289ab8f3bb951e2aeca"],["/tags/Android/page/2/index.html","45c84fad108ac6633b05896168a54b79"],["/tags/Android/page/3/index.html","223371064e742d85ab214e4a0b33fb80"],["/tags/Android布局/index.html","eb47ebc564f95f894c3672ee5e97fa13"],["/tags/Java笔记/index.html","99b62e1e394819f8693cc636e88d17e4"],["/tags/Kotlin/index.html","be414e21a11d4468958a0a1de0e03fe3"],["/tags/Python/index.html","be6e5e8269c993457660bf75653d5936"],["/tags/git/index.html","0feb0ffddb297c873a57d2ed4bcdfabd"],["/tags/index.html","5ddd50c1ab18b6deb6093bc28f239639"],["/tags/weex/index.html","3879ca3ac389248f556d583c69a3f92b"],["/tags/京东/index.html","2027293ce08a3fe0a25cd32381fac4d4"],["/tags/大新闻/index.html","08578f99872e504604888489384e488a"],["/tags/数据库-MySQL/index.html","a62bc7a4326e88e910d2d8995ca8156e"],["/tags/树莓派/index.html","2614748839f4239e8a56b1d8619b9569"],["/tags/线性代数/index.html","1aea191d97a96c19064b4d0bb7decb00"],["/tags/网站前端/index.html","6a6d3cfd845e59e5824811eae5d585ab"],["/tags/翻墙/index.html","cd9984e34260cdd6ddb693d7ff167e3e"],["/tags/面向切面-AOP/index.html","3a8a54e18734217cdeb3c580abd9db2a"]];
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
