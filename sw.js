/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/01/06/markdown语法/index.html","f996853eb41febb16cd24a88f4e3393a"],["/2017/01/06/markdown语法/yufa.png","8719de11346fe52ed128e85324096dfc"],["/2017/01/06/好久不见/index.html","51b7a99cdd05f6232052d5e971e4b47c"],["/2017/01/07/弄个大新闻/index.html","3318ae7baf027ae6234278be52fc200c"],["/2017/01/08/总结/index.html","6188e992dda9fc6b0ac523a53e033382"],["/2017/01/12/Android传递简单数据的方法/index.html","a79bc5aa299195d498a0db3bbf476cbc"],["/2017/01/13/为什么静态方法不能直接访问非静态成员/index.html","93acc8940a9a65360ea3bfa7f0e894f3"],["/2017/01/16/关于京东抢优惠券的思考/index.html","94be3c87d25b676eed444a49cac866b3"],["/2017/01/16/关于京东抢优惠券的思考/jd1.jpg","5f53c9970a59051c586a309142a2de89"],["/2017/01/16/关于京东抢优惠券的思考/jd11.jpg","f205e05055fe185913515c68a9e0a2d2"],["/2017/01/16/关于京东抢优惠券的思考/jd12.png","0facb5005bb7157736b2037c2a84a740"],["/2017/01/16/关于京东抢优惠券的思考/jd2.jpg","84d68abd09cfa889288d405b03c70192"],["/2017/01/16/关于京东抢优惠券的思考/jd233.jpg","4f67d6ca29dff1779f2a35a5dc63106f"],["/2017/01/16/关于京东抢优惠券的思考/jd3.jpg","33078c6902bfcffa6add5c4fa9d8256f"],["/2017/01/16/关于京东抢优惠券的思考/jd4.jpg","61d8efc5e1ba21f8c014c367d346ad7e"],["/2017/01/16/关于京东抢优惠券的思考/jd5.jpg","8dc31cc4a89da7d1684f876a314bcf76"],["/2017/01/16/关于京东抢优惠券的思考/jd6_1.jpg","cdc1275b246a794923192a08ae2399f7"],["/2017/01/16/关于京东抢优惠券的思考/jd6_2.jpg","92a04f119f911ba8d0a699d7ffcb2e63"],["/2017/01/16/关于京东抢优惠券的思考/jd7.jpg","0da09824149c792e122b87c441bf1eb8"],["/2017/01/16/关于京东抢优惠券的思考/jd8.jpg","b29ba362ff85e1b43422ae3269d37975"],["/2017/01/16/关于京东抢优惠券的思考/jd9.jpg","9e7e3ada8894616aae0f183fe88d2b11"],["/2017/01/24/Android的数据库/hj.jpg","a05bb14dcd21ab3118bfba37d9335359"],["/2017/01/24/Android的数据库/index.html","efc528bc5663476ca5094585b51ec23e"],["/2017/01/24/Android的数据库/l1.jpg","7e69e703c1d74d5bb2a851a29311615c"],["/2017/01/24/Android的数据库/l2.jpg","aeff5509e3d17ce0a404e0fc4de5c9fa"],["/2017/01/24/Android的数据库/l3.jpg","700b7ecb4c4ea5a92de247ef192c7f37"],["/2017/01/24/Android的数据库/sync.jpg","e03b62c7a05f2316dc86753420507b46"],["/2017/01/26/Java泛型笔记/index.html","74e77213dfe25a7368efb73d7cd03d17"],["/2017/01/27/单例模式/index.html","a2fb20d3e48a5f244fd10ea6eda2d429"],["/2017/02/01/简易翻墙的方法/f1.jpg","2581d86292ab9052514aee9fd91f3b8f"],["/2017/02/01/简易翻墙的方法/f2.jpg","9e109c806a7fe69b9aad81ff3f2b9906"],["/2017/02/01/简易翻墙的方法/index.html","a6911b1cfd8acb5d14c7f9ee33f3bcf3"],["/2017/02/01/简易翻墙的方法/使用方法.jpg","7f6d9b70c529784a4deaec93c7e3b8bc"],["/2017/02/04/Android通知栏的微技巧-转/Android通知栏.png","a7c8b4417475b4d15f248e9aacb74350"],["/2017/02/04/Android通知栏的微技巧-转/index.html","efa6a32faa5ea2c09474b6e307c154ac"],["/2017/02/05/Android的RecyclerView/index.html","ceb00127c38320eda004947723fd9b52"],["/2017/02/05/Android的RecyclerView/r1.jpg","9eeec54207d455491e0b8e08e5df24dd"],["/2017/02/05/Android的RecyclerView/r2.jpg","973a10b7b0ac96ab5abb064141ad4613"],["/2017/02/05/Android的RecyclerView/r3.jpg","bc1e15be3106cbcf6e9beef4be22734b"],["/2017/02/12/Android解析json的方法/face.jpg","d1d4e6a3140cdcc50979d31cb72c1f15"],["/2017/02/12/Android解析json的方法/g1.jpg","71820d6dedf01e29832e8e2f0508ae7a"],["/2017/02/12/Android解析json的方法/g2.jpg","5c90926ac82dcbd1d3cc404e3e8aa32f"],["/2017/02/12/Android解析json的方法/g3.jpg","4c166816b8974b811aa38862b01c1919"],["/2017/02/12/Android解析json的方法/index.html","dd1992a4e9f328bff6deac071c33bc44"],["/2017/02/12/全局获得Context的方法/index.html","14e612591e4045c610cc0a7f3c95adbe"],["/2017/02/13/利用SharedPreferences存储用户名密码/face.jpg","492244640fbf7e3e850308b7cd549064"],["/2017/02/13/利用SharedPreferences存储用户名密码/index.html","362d598cec106154f88cd175b3b3f724"],["/2017/02/21/Java的io流笔记/face.jpg","cddb614ef8ea50373f7dab5e261e88e0"],["/2017/02/21/Java的io流笔记/index.html","fee63afa2f6356e1ef7f21ffd2543b64"],["/2017/02/24/装饰模式/index.html","e196c6afbaf2534b7b7b5b6c31ce7f26"],["/2017/02/24/装饰模式/z1.jpg","1caaff9830cfca6d1c0a6d44b634ea1d"],["/2017/02/24/装饰模式/z3.jpg","4c14ce42eeca00bfc1820bcf486abd42"],["/2017/02/26/Java的线程笔记/index.html","a2584521a71e6abd48b712fc7b50b832"],["/2017/02/26/Java的线程笔记/t1.jpg","531ac5ab216b6c62835ba8185a06c53b"],["/2017/02/26/Java的线程笔记/t2.jpg","f9f57bcceba663fed989ec61288d3387"],["/2017/02/26/Java的线程笔记/t3.jpg","3d31a7efb1ed0416d0e957ca4df385e3"],["/2017/02/26/Java的线程笔记/t4.jpg","32d0c8e35cc2db2236efe845622474a7"],["/2017/02/26/Java的线程笔记/t5.jpg","178da46132727f9a2c373d7a39c497c2"],["/2017/02/26/Java的线程笔记/t6.jpg","3ae197d34b60b3d74202e18804bcbca7"],["/2017/02/26/Java的线程笔记/t7.jpg","0ad16bd8e4ef1ba3e133736b9a88fedf"],["/2017/03/30/Android的NavigationView获取headerLayout组件的方法/index.html","a5eff056bce9807566fe97be98ef0983"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/face.png","c9b98aefb439fa04e587d2ee5bacf0a9"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/index.html","d10cfd4b564dbf25e35796b5fb27cf05"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/o1.jpg","dab5e6b0ac04c512bd8521e73f57b317"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/o2.jpg","ef761bfc2b3b095d2f978e6973e20fc0"],["/2017/04/30/mvp和mvvm框架笔记/index.html","b51be25c102a8c736cbdce5e2613db4c"],["/2017/04/30/mvp和mvvm框架笔记/mvp.jpg","bf7bf997af33fddd6c725348fb220b11"],["/2017/04/30/mvp和mvvm框架笔记/mvvm.jpg","84e8ac6f4173febb3abef819c6847c1c"],["/2017/05/11/Android的fragment页面切换优化笔记/index.html","51dd11fa4812349d473f76f5e20599f9"],["/2017/06/15/Retrofit2笔记/index.html","208225db4f3ba34821bcb0617478ecd6"],["/2017/07/01/android开发艺术探索笔记/b1.jpg","a1a8c64e3f734b73f77268b8fc5f2b1f"],["/2017/07/01/android开发艺术探索笔记/b2.jpg","b307f466aed09d6c457e9f67ab029e55"],["/2017/07/01/android开发艺术探索笔记/b3.jpg","3e0b93a47b78d6d7ddbe37ce5c23388e"],["/2017/07/01/android开发艺术探索笔记/b4.jpg","d96cc8947bc932eadb35752b7d446aea"],["/2017/07/01/android开发艺术探索笔记/b5.jpg","87df47140a9a2340a7fe71640e81359e"],["/2017/07/01/android开发艺术探索笔记/face.jpg","54a7967ae6523116af00474944595736"],["/2017/07/01/android开发艺术探索笔记/index.html","83576fed928bdd2e8d6d4d551ca07de0"],["/2017/07/01/android开发艺术探索笔记/s11.jpg","44ecc475fc71d4f1324700e2cdc3e537"],["/2017/07/16/代理模式/d1.jpg","c3b222d9b50571a393cf86fe466bee03"],["/2017/07/16/代理模式/d2.jpg","025c9760e4eb8c99cb52344d3e5af608"],["/2017/07/16/代理模式/index.html","343fbf15cecd7d119ac705cfe275bb2b"],["/2017/07/19/BroadcastReceiver广播/g1.jpg","95acdfb4d5fc9a495a5ae576c98b286a"],["/2017/07/19/BroadcastReceiver广播/index.html","0af24e503967db1449ab64d7e57511ac"],["/2017/07/21/git与github快速入门/face.jpg","127e571d0e61487c6863a02f516a0cda"],["/2017/07/21/git与github快速入门/g1.jpg","16340b4a74d0bf17ab65f5ced4999896"],["/2017/07/21/git与github快速入门/g2.jpg","a6fae17935f965048679c70c04c6205a"],["/2017/07/21/git与github快速入门/g3.jpg","0f7aac4cc7e33b5c751c918d99b10711"],["/2017/07/21/git与github快速入门/g4.jpg","709037e4cccf6e25c3115eb6c2fc581c"],["/2017/07/21/git与github快速入门/g5.jpg","f9a4549ae09c867c1bfe160f2737429d"],["/2017/07/21/git与github快速入门/g6.jpg","11fcb2a3b2a0fda51c3ae1195c64bf02"],["/2017/07/21/git与github快速入门/git.jpg","f81f175b2aa60accc5be3d2938443733"],["/2017/07/21/git与github快速入门/git1.jpg","8f95b15144b6a86f51d2269957f3240e"],["/2017/07/21/git与github快速入门/git2.jpg","309085d23b2601d757722c8e87372b7a"],["/2017/07/21/git与github快速入门/index.html","fb87c29844b9a6ac387e303f39f6265e"],["/2017/07/21/git与github快速入门/study.png","2075a23765cb6faa00fb5d9bedaf8fa4"],["/2017/07/24/Android-Butter-Knife-框架/b1.jpg","925e050934ad31922e1c83a42c26b714"],["/2017/07/24/Android-Butter-Knife-框架/b2.jpg","0eff5cb764d652afe3fb32f7960ae103"],["/2017/07/24/Android-Butter-Knife-框架/b3.jpg","c8252248c54856bbf498f781be4907fb"],["/2017/07/24/Android-Butter-Knife-框架/b4.jpg","ae76887599574d57a58d5972fadf7a6c"],["/2017/07/24/Android-Butter-Knife-框架/index.html","81c11057f98a3998382081bfc7d16cf7"],["/2017/07/31/一些android笔记/b1.jpg","925e050934ad31922e1c83a42c26b714"],["/2017/07/31/一些android笔记/b3.jpg","c8252248c54856bbf498f781be4907fb"],["/2017/07/31/一些android笔记/ba1.jpg","943ee61e81f33fcc4dd4018ca62fc129"],["/2017/07/31/一些android笔记/c1.jpg","2a4a4900587a645d8a0f9a7790de477c"],["/2017/07/31/一些android笔记/index.html","9a1ec7a7af74eb9ff8fd5126ccf61f72"],["/2017/07/31/一些android笔记/s1.jpg","cb3b9d67f22c02d636b12be452c13922"],["/2017/07/31/一些android笔记/s2.jpg","8fb37f9f69865a66b7c7f2a1afd0c2ae"],["/2017/07/31/一些android笔记/sb1.jpg","fb76380ff9a028e42df8490ff5c28c9b"],["/2017/07/31/一些android笔记/sw1.jpg","d5f4e22f98750e34139e8ed06bfa0418"],["/2017/08/04/Android动画笔记/index.html","1f37f06b09a2ac88f08b46ada5ae0fa5"],["/2017/08/09/Android-布局复习/c.gif","7e34c56d6324226c2b57dce7a28f289f"],["/2017/08/09/Android-布局复习/g1.jpg","2e7c78a7bdc1211318f1a7314bbe80e2"],["/2017/08/09/Android-布局复习/g2.jpg","f0d24aee0759cd18a0310baace202764"],["/2017/08/09/Android-布局复习/gr1.jpg","8cdfa1fbbfdb2accb783346fbf3f673f"],["/2017/08/09/Android-布局复习/index.html","c02ad4fd6a57950dd0e8a146a087d5ed"],["/2017/08/09/Android-布局复习/l1.jpg","22739cc4c3d40cc837f53db4c5b1e90a"],["/2017/08/09/Android-布局复习/l2.jpg","6f1efa4f3549c68d6908fa10f9fce87c"],["/2017/08/09/Android-布局复习/l3.jpg","fbfa39bfb0cc0eb0e8536c81ff696bed"],["/2017/08/09/Android-布局复习/r1.jpg","10c4c2cf2114fc08c33ee027a6e5bc2b"],["/2017/08/09/Android-布局复习/r2.jpg","7a0821279b7cfc7929ab734a3fef36cd"],["/2017/08/12/Toolbar的玩法-伪/co1.gif","e17d721c6927df2912720f9d3a0d0e1f"],["/2017/08/12/Toolbar的玩法-伪/co1j.gif","b50f90da72c46dccfe8e09cc725329b1"],["/2017/08/12/Toolbar的玩法-伪/co2.gif","71d3beb19ff87ed9c3a0fbe299ef4f0f"],["/2017/08/12/Toolbar的玩法-伪/co3.gif","63047b639a00bd4154619688d47ed80d"],["/2017/08/12/Toolbar的玩法-伪/co4.gif","e3e6d88fcff064e4f14b1541d776e431"],["/2017/08/12/Toolbar的玩法-伪/coo1.jpg","e3920ef7d5dc14f018fd3dafa390be7e"],["/2017/08/12/Toolbar的玩法-伪/index.html","f819e926f189009c9a7c1c54c0ea6618"],["/2017/08/12/Toolbar的玩法-伪/t1.jpg","1688359c4b328ef1907f5c04eb498c75"],["/2017/08/12/Toolbar的玩法-伪/tt1.gif","461d4b8c8c7eeba4985a82fefe6070e0"],["/2017/09/23/RecyclerView动态切换不同布局的方法/b1.jpg","6b48198a8310bcc30059a97ff4b476a3"],["/2017/09/23/RecyclerView动态切换不同布局的方法/b2.jpg","6e59ceeab84d45219df717d324830fcf"],["/2017/09/23/RecyclerView动态切换不同布局的方法/cd.jpg","888843d84f1ba2f774ab5c25536574f6"],["/2017/09/23/RecyclerView动态切换不同布局的方法/index.html","20331c0e28868c811c0cb2b09d272558"],["/2017/09/23/RecyclerView动态切换不同布局的方法/r1.jpg","5aa90d955fd77d28573e2b4538f4f0f4"],["/2017/09/23/RecyclerView动态切换不同布局的方法/r2.jpg","90fdd8ba0112794b5a5fe45db82fb5f9"],["/2017/09/23/RecyclerView动态切换不同布局的方法/r3.gif","889b392ff2e5eb80068dbf6f9566f27d"],["/2018/01/14/电锯惊魂8/index.html","cd421eda160798b5878178c7119513ec"],["/2018/02/15/java细节笔记/face.jpg","4b85f92e1478a12013808e44a9fa1fc7"],["/2018/02/15/java细节笔记/index.html","41ceb9933efa31d56cec076fe33454e1"],["/2018/02/15/java细节笔记/java1.jpg","d2b4a31471061ae91bfe7ae06686951d"],["/2018/02/15/java细节笔记/java2.png","ed41928f8bbcb700483c50bc356b5de9"],["/2018/02/15/java细节笔记/java3.jpg","19ae81b450121dde484b47c6b6bc8428"],["/2018/02/15/java细节笔记/java4.jpg","fdc54faed81f01ff31eccd949cbb3301"],["/2018/03/04/Android-自定义View的探索/index.html","555974c72a25b7db9c56369dd03538ba"],["/2018/03/09/Android的Drawable/index.html","baff996b0bc73481f5fce4a2a5e0ab29"],["/2018/03/09/Android的悬浮窗/index.html","56f73ca28f4204190401f5e496382746"],["/2018/03/13/Android常用的ViewPager/index.html","77901e4db5a3fbc2ed1d6a1a1c36558f"],["/2018/03/19/python-入门笔记/index.html","ee9a37d82fc12723c3bab0ddf1ab79e4"],["/2018/03/19/python-入门笔记/p1.png","63a8f0765f53686f359ac0a4a67ae314"],["/2018/03/19/python-入门笔记/p2.png","35fd4e9069231985f562f00455e97dba"],["/2018/03/19/python-入门笔记/p3.png","db283f7ef59ee5e912c5ae2082a33879"],["/2018/03/19/python-入门笔记/p4.png","93b9747abad3d81214b710e9a9d125a7"],["/2018/03/19/python-入门笔记/p5.png","139f53c418f4262b9443467124c05154"],["/2018/03/19/python-入门笔记/p6.png","4867a70e9dcc618337fe418fccad0e45"],["/2018/03/19/python-入门笔记/p7.png","1b84fff5456b5df9b5eaa67385415ff1"],["/2018/03/19/python-入门笔记/p8.png","d18cf77bf770bdc42eb4d7fb16f70ef5"],["/2018/03/19/python-入门笔记/p9.png","fa7d751e8929d604a937937c2f87bfc5"],["/2018/04/09/Android的运行时权限/index.html","c08385f72d45eada1026e9476acac1d1"],["/2018/04/09/Android的运行时权限/permission.png","361227ac9b061134f1e00bb0c8e4c637"],["/2018/04/22/正则表达式笔记/index.html","342be8126c53091080c21e4ff7a699b5"],["/2018/06/10/Android串口开发的一些事/index.html","0f0b304f68fd3d9d4a582f2067f96ef2"],["/2018/06/10/Android串口开发的一些事/p.png","e40d530a6b1f0b49186dac2335a9a18c"],["/2018/06/23/Android的RxJava笔记/index.html","7de4766fd9ce41a22e9cc344a1d0626e"],["/2018/06/23/Android的RxJava笔记/r1.png","a5211e974edd613583a510958a1dd75f"],["/2018/06/23/Android的RxJava笔记/r2.png","368b382d4454b30f25808a747e24119e"],["/2018/06/23/Android的RxJava笔记/r3.jpg","dea1e0d7a40dbf8034d2ff532a0b120e"],["/2018/06/23/Android的RxJava笔记/r4.jpg","c551db9622f9bcc9d94d9269aa285d77"],["/2018/07/04/Android的GreenDao笔记/index.html","92bc4e0d066cad5ccba431bf380e5ef9"],["/2018/07/15/树莓派使用日志/index.html","843aede7163577f515bf200518277940"],["/2018/07/15/树莓派使用日志/usb1.jpg","298f474c17f36c3cbe06e321821839d6"],["/2018/07/15/树莓派使用日志/vnc.jpg","47f282cd0b8cf1d42187ee203a204dfe"],["/2018/07/15/树莓派使用日志/vnc2.jpg","acf8fe4ddcba2a668f8cbf963f53ae8f"],["/2018/07/21/Java的反射与注解/f1.jpg","64132c805bb4e80400b0963d70ceb392"],["/2018/07/21/Java的反射与注解/f2.jpg","124c3de25a84f3d23fd0ec0f4f8c19fa"],["/2018/07/21/Java的反射与注解/f4.jpg","bdc07dfffc1b086dba363f54fe8a4727"],["/2018/07/21/Java的反射与注解/f5.jpg","eded410fc07761651bc07feb4b74a8b4"],["/2018/07/21/Java的反射与注解/f6.jpg","592483c81bad6c1948b68bb1beaddf61"],["/2018/07/21/Java的反射与注解/f7.jpg","919cdd4a78449826677e9197758d5f11"],["/2018/07/21/Java的反射与注解/f8.jpg","9d6ce766ec6a3421375f682200c34a81"],["/2018/07/21/Java的反射与注解/f9.jpg","88b86885c932d3c6865481b4bc411b55"],["/2018/07/21/Java的反射与注解/index.html","27882eec0bed3a577707a2585b8a9c4d"],["/2018/07/29/MySQL的一些记录/index.html","721cc318f0346eb47f4addc5ec60729e"],["/2018/07/29/MySQL的一些记录/m1.jpg","32adb1408737c7301666100f73256b6e"],["/2018/07/29/MySQL的一些记录/m10.jpg","043c4d5e41a3edd594cfa9b562e1c597"],["/2018/07/29/MySQL的一些记录/m2.jpg","a749b197e706bbef57757d6de6296104"],["/2018/07/29/MySQL的一些记录/m3.jpg","b72e05b7dbfe455f0a679f2866a128c3"],["/2018/07/29/MySQL的一些记录/m4.jpg","bfcc96c9a7e73bc511b1d4a98e058c16"],["/2018/07/29/MySQL的一些记录/m5.jpg","0efe66139d0057a636c589996cabd5bc"],["/2018/07/29/MySQL的一些记录/m6.jpg","af346a61c9ce656b584a5b6c9c3e32ea"],["/2018/07/29/MySQL的一些记录/m7.jpg","76dd372928c43bd026af2aac55474059"],["/2018/07/29/MySQL的一些记录/m8.jpg","a76576f5b9b7afbe73ae51219f25ddbe"],["/2018/07/29/MySQL的一些记录/m9.jpg","e9e7a1474316930b2b5da6ae8c1f880c"],["/2018/08/18/weex混合开发的一些记录/index.html","f09d9fb21d842db6df4843df4d3a36d4"],["/2018/08/19/网站前端的一些记录/css1.jpg","2c96c11a18b9f693cf93c4fc8f311219"],["/2018/08/19/网站前端的一些记录/css2.jpg","4c85b370f42d1544a499d40249819dcb"],["/2018/08/19/网站前端的一些记录/css3.jpg","a03790582126606827aa595ed261f1ca"],["/2018/08/19/网站前端的一些记录/css4.jpg","7db63a1c446b3add72b266375905f506"],["/2018/08/19/网站前端的一些记录/index.html","be5cfb7dac63e88d3adaa689ca073dbd"],["/2018/09/24/Android的AOP编程/a1.jpg","e3320b7400902b29daaabf82a0f8433a"],["/2018/09/24/Android的AOP编程/a2.jpg","c6a933b92e9fe8f3fe1e9d104de5ef2b"],["/2018/09/24/Android的AOP编程/a3.jpg","ea7405dfdcb3bcdf84bdd67fef9665ee"],["/2018/09/24/Android的AOP编程/index.html","8566844140b5e119a916bcba6a696639"],["/2018/09/24/线性代数/index.html","a0d983af6329cc506694ce2fe9d0a4bc"],["/2018/10/06/kotlin的笔记/index.html","d2a23435e4e2b43faa3a8b378f27c21b"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c0.jpg","3e9250998bcae8ec8bf38e962a4eb09e"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c1.jpg","80a7110fcfd46636b0eb48634b68da73"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c2.jpg","5ccdb51eb9e2728752d1e4e5c11cec3e"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c3.jpg","44717861ced23c5627de2999fa2756eb"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c4.jpg","cd96746ebbf2537c9412601d6d802e02"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f0.jpg","522f86b000e9a0ddea86edfe4fde6f24"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f1.jpg","f0c7cd148f606ac0700ec90205be51de"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f2.jpg","5cad1bb88892da34d8222ff50dec1e36"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f3.jpg","a892e313628197cc4823b59992565576"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f4.jpg","34ef5afd456167e41cde6cc29ebf8bae"],["/2018/11/17/ConstraintLayout和FlexboxLayout/index.html","fa8ef32c70695bd41ff639f90b4f73d0"],["/2019/02/01/Android传统蓝牙与低功耗蓝牙/b0.jpg","68eaadb373ebe4b890aaa61574677edb"],["/2019/02/01/Android传统蓝牙与低功耗蓝牙/b1.jpg","8d620f9fbf709f2e5386a54963adb511"],["/2019/02/01/Android传统蓝牙与低功耗蓝牙/b2.jpg","d5586188b2031542c3e7e984183fbbc9"],["/2019/02/01/Android传统蓝牙与低功耗蓝牙/index.html","44a0c6e3344abee9c74a2c1c8b866fde"],["/2019/03/07/几种常用的设计模式的笔记/1.jpg","5d99ffece366b613684e7e870ec608cf"],["/2019/03/07/几种常用的设计模式的笔记/2.jpg","ca6bb370a45ecd7babc402ef2bba0310"],["/2019/03/07/几种常用的设计模式的笔记/3.jpg","41a0e3686ec44fd05cb5c9ec8e9618ce"],["/2019/03/07/几种常用的设计模式的笔记/4.jpg","47e571a32b51d28164e36a3e45732c70"],["/2019/03/07/几种常用的设计模式的笔记/5.jpg","df0917aa00161c5b44049752cbd968be"],["/2019/03/07/几种常用的设计模式的笔记/6.jpg","91bba768f0085d14e91e2f1d5309f5c2"],["/2019/03/07/几种常用的设计模式的笔记/7.jpg","a4224281647af2937b7bcf6b3af2d0ae"],["/2019/03/07/几种常用的设计模式的笔记/index.html","4d458c3ad14e326596e96fac26117f12"],["/2019/03/07/几种常用的设计模式的笔记/r1.png","a5211e974edd613583a510958a1dd75f"],["/2019/03/07/几种常用的设计模式的笔记/r2.png","368b382d4454b30f25808a747e24119e"],["/2019/03/17/位运算复习/index.html","64b243f5ff7bbe6d428fc23cbe23e71c"],["/2019/04/06/Android-5-x中-UsbDevice-mInterfaces为空的解决方法/index.html","777ef47faba69bb3f09a3a9f64d3f685"],["/2019/04/14/Android-缓存笔记/index.html","34e2a2d88a649f82d7f61fd41f8ef20c"],["/2019/04/21/c语言回顾/index.html","467b283532895aecfe7a8fd1975ec83d"],["/2019/05/03/Java-只有值传递/index.html","ea5bdf7ea6dd98c4a92e15af25e5dbd2"],["/2019/05/03/Java-只有值传递/j.jpg","d7514977bbedbb72eb59c7c776eac978"],["/2019/07/14/smali语法笔记/index.html","6bf05eb3a63d3d4f66d817ef4fd69837"],["/2019/10/03/linux基本操作笔记/index.html","2503b56dda68ca51f1e411b50959a6e0"],["/2020/01/04/Android自定义view-测量与布局/index.html","c60366ef2e2a7dcb5ca98fdeeefae0d2"],["/2020/02/13/Android自定义view-几种刷新方法的区别/index.html","0f28790a5af95a61cb2d719f158b25e8"],["/2020/02/13/Android自定义view-手势与滑动/1.gif","2687f70b2aa61db0bf3a6d5bb9ba8fdb"],["/2020/02/13/Android自定义view-手势与滑动/index.html","84a4a4912cb1aed9eed9f9e420631a2c"],["/2020/02/15/Android自定义view-多点触控与拖拽/1.png","273fbe21c61c1a1951217f1c62fbbe7c"],["/2020/02/15/Android自定义view-多点触控与拖拽/2.gif","c201e50651c1cac9e090f71e541a3e28"],["/2020/02/15/Android自定义view-多点触控与拖拽/index.html","4102cb7d7a57452a4bcc8d0ab1ec7113"],["/2020/03/15/cpp回顾/index.html","3456005702e841c14f14d071454df743"],["/2020/03/28/JNI笔记/1.png","c34dcf3fe063448902c7e8ddaad13966"],["/2020/03/28/JNI笔记/2.png","7488c80c8aeb5bb599cde436ab917111"],["/2020/03/28/JNI笔记/3.png","35875cfa58ac95f2e1c1f6e6fd9bcb8d"],["/2020/03/28/JNI笔记/index.html","cbfe882de368027f4b7248ebec5251e6"],["/2020/06/20/回顾数据结构与算法/danlianbiao.jpg","1a75ec722960cf1a46401436f1e9120c"],["/2020/06/20/回顾数据结构与算法/danxunhuan.jpg","aec03b0bd8769f3e2e9f9f165355a18a"],["/2020/06/20/回顾数据结构与算法/duilie.jpg","9401a14633ada9fe6c188886b81536de"],["/2020/06/20/回顾数据结构与算法/erchacun.jpg","b0c5c849245c5aa0dd538d3a8767052c"],["/2020/06/20/回顾数据结构与算法/erchashu.jpg","f2d5ca7d81b1273d8d624db1471944d3"],["/2020/06/20/回顾数据结构与算法/haxi.jpg","2b1d16256225bd15a1ffacaff4a63bc7"],["/2020/06/20/回顾数据结构与算法/hongheishu.jpg","47b694cb6fedf05f86d9b233b281811e"],["/2020/06/20/回顾数据结构与算法/index.html","b0870249f1cfb72e4399e8d83c70fe33"],["/2020/06/20/回顾数据结构与算法/jiedian.jpg","3dd22e5060034832a377b99ce67c3579"],["/2020/06/20/回顾数据结构与算法/jihe.jpg","5d8b7acc6fb2c1231145c5ff77c6e0ba"],["/2020/06/20/回顾数据结构与算法/lalian.jpg","409f45aabf629657ce765bdc97a18338"],["/2020/06/20/回顾数据结构与算法/shu.jpg","27ebcf3f70c62a3d4951f9e35a9802be"],["/2020/06/20/回顾数据结构与算法/shuanglianbiao.jpg","049f4e7a5b00970918398751ad266d51"],["/2020/06/20/回顾数据结构与算法/shuangxunhuan.jpg","173bc7c91f72ff7830cd97bcce8c6e4e"],["/2020/06/20/回顾数据结构与算法/shuxing.jpg","9a02265847e519af403bbf23fa4b6d04"],["/2020/06/20/回顾数据结构与算法/shuzu.jpg","01faaf097783fd50c0a1a61e148c934a"],["/2020/06/20/回顾数据结构与算法/tuxing.jpg","7610901f88ccebe29edf7b9a51a38510"],["/2020/06/20/回顾数据结构与算法/xianxing.jpg","b63c6398dd93f68e2f53320164c17d46"],["/2020/06/20/回顾数据结构与算法/xianxingbiao.jpg","f90126aa02f177b31f00164028fa8825"],["/2020/06/20/回顾数据结构与算法/zhan.jpg","eacf4b7e75b57a68bf0612a2b8df4a00"],["/archives/2017/01/index.html","98a557c4456df70e0f6011275f262a83"],["/archives/2017/02/index.html","91b0418894ea5a7aca9bca5b6382d1b9"],["/archives/2017/03/index.html","d03b1bf82eadde50e4bf0f41d9cd3a3c"],["/archives/2017/04/index.html","09e827e1d866ba481e16b33e1d8e2732"],["/archives/2017/05/index.html","f4b2a2720947c8a13a58c9043cb394ec"],["/archives/2017/06/index.html","707c223cd58c8a140ea8fd52e724992a"],["/archives/2017/07/index.html","e0d91ac9a60fc7531cac53bd8b8321c1"],["/archives/2017/08/index.html","e379a2a25d8cb277d5688b0d0df9324a"],["/archives/2017/09/index.html","b82aee457b629a9f04a55f45e89eb84a"],["/archives/2017/index.html","e41ae0222b169bfd98b750c0cb8bbed5"],["/archives/2017/page/2/index.html","60cb12a121696cf18ec3165b82fe1f14"],["/archives/2017/page/3/index.html","e01bc843a3003cda512d85e43b674f3a"],["/archives/2017/page/4/index.html","c055fd65a8044f5bdfc4553718140e58"],["/archives/2018/01/index.html","cf033e773e14887166b6dd5272313e16"],["/archives/2018/02/index.html","bfa620177c2cfefe8c3826f76d68682a"],["/archives/2018/03/index.html","6717f29dbdb8e29b90e749c8d1adf4e1"],["/archives/2018/04/index.html","3745abca55bc8353a3346c0c3e57be11"],["/archives/2018/06/index.html","21a2b44c980364248837b6f6206b5c4f"],["/archives/2018/07/index.html","0d9a21670fe66c852ff13b0f41d47836"],["/archives/2018/08/index.html","a12b4979a192799600b058ed5b34efaa"],["/archives/2018/09/index.html","20a2c53a046b956d7cd8a570515e46ef"],["/archives/2018/10/index.html","5c2882e923a280ceb996ec746dfbf225"],["/archives/2018/11/index.html","ff93b331a3cafe8d54f2c7333305dce1"],["/archives/2018/index.html","d12d40ae40689b27c3c977539e93222a"],["/archives/2018/page/2/index.html","cdae80cfe1d9784bccf337931db2faa6"],["/archives/2018/page/3/index.html","c9eab4fb76bbe9920ff788b60c5bfd56"],["/archives/2019/02/index.html","38344073b32e8229a037ff6e354e4f47"],["/archives/2019/03/index.html","fbd71efbf4a4a6d750bd5405e661253a"],["/archives/2019/04/index.html","16b9de33c4df61486026f7e99ad5cac2"],["/archives/2019/05/index.html","768456c68d355266bbf5a361b20bd85a"],["/archives/2019/07/index.html","2b269eb993bb1c5639e40f05f543a635"],["/archives/2019/10/index.html","68470af63c78d552c8ef51e9b2751759"],["/archives/2019/index.html","c7e39760ab05aa0516bdf9b531b4dc3c"],["/archives/2020/01/index.html","b1f05ab1d5f137e446a3841d8db4becf"],["/archives/2020/02/index.html","4c11d0d323ac6ef72ce8ac99e74121b0"],["/archives/2020/03/index.html","cc37e0f728e3c76cadda159f6fea6e20"],["/archives/2020/06/index.html","282e6cd5cb3a174ac8b627b52c34b4f1"],["/archives/2020/index.html","95c655669c29cc8fca8c9e314b4a2c9b"],["/archives/index.html","68a574017f66b0fc8eee1c74b2c308a8"],["/archives/page/2/index.html","65e7c05bf79a662554f4464b1221a5b0"],["/archives/page/3/index.html","e67b114ccfad8a5fd3752021fa4036b2"],["/archives/page/4/index.html","73aad862229a68e6578ff7618196542d"],["/archives/page/5/index.html","63b706c83611880f545dcc74deedd473"],["/archives/page/6/index.html","92aa9931040aa46c634b21d62c9f75cd"],["/archives/page/7/index.html","20adba648a198419dd74c928523fc383"],["/archives/page/8/index.html","d6c6ecbde145e88c749c2a0b66fc0efa"],["/assets/css/DPlayer.min.css","dbd3507575bf0763906678043dceedbd"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/css/main.css","28db1abe408f9ac9f1098d88a15316fc"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/1.jpg","74026237ccdeaf9d93b3ceb5ed10ccad"],["/img/yufa.png","8719de11346fe52ed128e85324096dfc"],["/index.html","c4ce7217a7044ffd8b2b1d30c23eaf6f"],["/js/src/affix.js","5789a14999908bf19dc61366de339491"],["/js/src/algolia-search.js","cdd5224a2a0c32f7871bde444732e915"],["/js/src/bootstrap.js","fd0e31e2d35eb0ef2c14ef15aa0f64cd"],["/js/src/exturl.js","96506da622e6ce9d83b35eb8ff0495c6"],["/js/src/js.cookie.js","3d046d51bd850c4583a872b430ccd344"],["/js/src/motion.js","ce30b6562f0d90d0e872d9f68d913182"],["/js/src/post-details.js","6dd103dd60dcf74241870d8e1963ac58"],["/js/src/schemes/muse.js","9dd5728a150bb2d44ccb12b36a96cb3f"],["/js/src/schemes/pisces.js","308af66c33ef1447c2a0742933b68fb2"],["/js/src/scroll-cookie.js","878ca42a0afadd8fdd10593513805e22"],["/js/src/scrollspy.js","4446e35ed870854eec108f197ee3210e"],["/js/src/utils.js","1a2c56c6f1ad910b58c348be6d2b3062"],["/lib/canvas-nest/README.html","b200373b7cb99beedd0c70a9e2997789"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","a615a34dd43221d519c1acaa1aad0b75"],["/lib/font-awesome/css/font-awesome.min.css","a615a34dd43221d519c1acaa1aad0b75"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","93bd178130cc5e0c78700c56be02c590"],["/lib/reading_progress/README.html","a8cd5933e1a0047ca5345bea00034ade"],["/lib/reading_progress/reading_progress.js","80f910f702c462e90c54154851063f55"],["/lib/reading_progress/reading_progress.min.js","dd4f298c9228f42432e143f190ee03f5"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5f7794caf645208cdac41644988500f2"],["/lib/velocity/velocity.js","941752683d82c0ed1ede5e6c53460698"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","02ab9cb4a1942467492b15a6eb692975"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/2/index.html","c936df821fe370f9e4db83a291f79112"],["/page/3/index.html","4b8217be089f97e8ca77d2ed106a929e"],["/page/4/index.html","20d43b7ed15254897fa8b01096b768bb"],["/page/5/index.html","9d68d5e6dabd403e971afce4c9c49806"],["/page/6/index.html","f8cdadc9b8685849b7784c3e54ff12e3"],["/page/7/index.html","3d2bf96484fae6e7f35193053588a47e"],["/page/8/index.html","b3683615b2845a13d818a495d5c550be"],["/sw-register.js","b618a359b54c46bc62be2fa4ea7c6a8d"],["/tags/Android-串口/index.html","f0905e2804b78d8c5b6030e48e4042d1"],["/tags/Android-数据库/index.html","662f1d9a4c90aed092f904dceab0a38e"],["/tags/Android-蓝牙/index.html","b4707149602e207a585da00dfa1075d2"],["/tags/Android/index.html","90335ce4bd693749cbd14d9306ee2a92"],["/tags/Android/page/2/index.html","3ad173f4beae35a67df93d642f110b44"],["/tags/Android/page/3/index.html","c43488e74e9feb47462e4f6ffa91982b"],["/tags/Android安全/index.html","fa17cf5c02d87406f66e50e8bf95f339"],["/tags/Android布局/index.html","bcead9261480e16fbea4565b73ab7855"],["/tags/Android系统/index.html","1c803808a36665d5982fa535984642bd"],["/tags/JNI/index.html","023a0fec1a9bd89c24111c63021b19d7"],["/tags/Java笔记-设计模式/index.html","ce705b7ddab62d8d9793c276129b0b51"],["/tags/Java笔记/index.html","04b7905115b3cc88388f74440250fdab"],["/tags/Kotlin/index.html","a38aa3b64d21818dd565ab26c395d385"],["/tags/Python/index.html","842462723baf075f5f0df0fe9d9d4769"],["/tags/cpp/index.html","50422b3e651d565356c426aac3fa6eb7"],["/tags/c语言/index.html","75c27e8eae85a98c91cda781ea0e145b"],["/tags/git/index.html","02981772b8c20ef620599152bfd48195"],["/tags/index.html","489f4e48710db0f78ca350863cfeaa23"],["/tags/linux/index.html","9f5e865d1e72c6d00c3815ec5db91e8b"],["/tags/weex/index.html","5ee4cc841798ec009e28ab4f84e06211"],["/tags/京东/index.html","e8f8d7e9df90eeaef4ec5c1575c0b77e"],["/tags/位运算/index.html","862e50512482fc5f3111bf551996248b"],["/tags/大新闻/index.html","56a87e7695642c6d03fa30ca1d0d23ef"],["/tags/数据库-MySQL/index.html","e94aa5978e560438fcb80c9279860c4f"],["/tags/数据结构算法/index.html","7ea79512a055cba2db05106613c3da54"],["/tags/树莓派/index.html","8aff299e61f88fb7d8cd9431a60d1bf8"],["/tags/线性代数/index.html","7053d15cc02df4af5e72b6f69eae10fb"],["/tags/缓存/index.html","376f7dad1dc739cc28b2b91afb0e5790"],["/tags/网站前端/index.html","85970a1aae88c35a9ef76643b4a1853e"],["/tags/翻墙/index.html","a446593d82af352e2007e1d6b930a463"],["/tags/自定义View/index.html","ffeb99445faf13659cfef7868ede1fe2"],["/tags/面向切面-AOP/index.html","343c649ab0b6be352dea26ed6921a432"]];
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
