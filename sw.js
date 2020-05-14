/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2016/10/29/hello-world/index.html","c34f713c0102a0c25e475817a9fd8901"],["/2017/01/06/markdown语法/index.html","0263adcfca1a4a37057caabf373cae81"],["/2017/01/06/markdown语法/yufa.png","8719de11346fe52ed128e85324096dfc"],["/2017/01/06/好久不见/index.html","74d8238d2a06eaccfa06352d36fa698f"],["/2017/01/07/弄个大新闻/index.html","1d387c6c8d887d90ceda1ad32d8611ca"],["/2017/01/08/总结/index.html","5afe97e81c8bf5ba760eac1156a60493"],["/2017/01/12/Android传递简单数据的方法/index.html","d9fd2e61d0797d2746e05b518b8df832"],["/2017/01/13/为什么静态方法不能直接访问非静态成员/index.html","3644255272d04e5fbca158f5849d261e"],["/2017/01/16/关于京东抢优惠券的思考/index.html","3a0a73c1338cbcd8bad7317c2debdbd7"],["/2017/01/16/关于京东抢优惠券的思考/jd1.jpg","5f53c9970a59051c586a309142a2de89"],["/2017/01/16/关于京东抢优惠券的思考/jd11.jpg","f205e05055fe185913515c68a9e0a2d2"],["/2017/01/16/关于京东抢优惠券的思考/jd12.png","0facb5005bb7157736b2037c2a84a740"],["/2017/01/16/关于京东抢优惠券的思考/jd2.jpg","84d68abd09cfa889288d405b03c70192"],["/2017/01/16/关于京东抢优惠券的思考/jd233.jpg","4f67d6ca29dff1779f2a35a5dc63106f"],["/2017/01/16/关于京东抢优惠券的思考/jd3.jpg","33078c6902bfcffa6add5c4fa9d8256f"],["/2017/01/16/关于京东抢优惠券的思考/jd4.jpg","61d8efc5e1ba21f8c014c367d346ad7e"],["/2017/01/16/关于京东抢优惠券的思考/jd5.jpg","8dc31cc4a89da7d1684f876a314bcf76"],["/2017/01/16/关于京东抢优惠券的思考/jd6_1.jpg","cdc1275b246a794923192a08ae2399f7"],["/2017/01/16/关于京东抢优惠券的思考/jd6_2.jpg","92a04f119f911ba8d0a699d7ffcb2e63"],["/2017/01/16/关于京东抢优惠券的思考/jd7.jpg","0da09824149c792e122b87c441bf1eb8"],["/2017/01/16/关于京东抢优惠券的思考/jd8.jpg","b29ba362ff85e1b43422ae3269d37975"],["/2017/01/16/关于京东抢优惠券的思考/jd9.jpg","9e7e3ada8894616aae0f183fe88d2b11"],["/2017/01/24/Android的数据库/hj.jpg","a05bb14dcd21ab3118bfba37d9335359"],["/2017/01/24/Android的数据库/index.html","5d2df62cc13521ab129fbeaeaf99ccb1"],["/2017/01/24/Android的数据库/l1.jpg","7e69e703c1d74d5bb2a851a29311615c"],["/2017/01/24/Android的数据库/l2.jpg","aeff5509e3d17ce0a404e0fc4de5c9fa"],["/2017/01/24/Android的数据库/l3.jpg","700b7ecb4c4ea5a92de247ef192c7f37"],["/2017/01/24/Android的数据库/sync.jpg","e03b62c7a05f2316dc86753420507b46"],["/2017/01/26/Java泛型笔记/index.html","d026854bd4f165db61d0a2bd1c3f3773"],["/2017/01/27/单例模式/index.html","2b3a58fd0a6099aa80ef54607a6714c8"],["/2017/02/01/简易翻墙的方法/f1.jpg","2581d86292ab9052514aee9fd91f3b8f"],["/2017/02/01/简易翻墙的方法/f2.jpg","9e109c806a7fe69b9aad81ff3f2b9906"],["/2017/02/01/简易翻墙的方法/index.html","4fa2df663b9e622a5757a299f4724b3c"],["/2017/02/01/简易翻墙的方法/使用方法.jpg","7f6d9b70c529784a4deaec93c7e3b8bc"],["/2017/02/04/Android通知栏的微技巧-转/Android通知栏.png","a7c8b4417475b4d15f248e9aacb74350"],["/2017/02/04/Android通知栏的微技巧-转/index.html","d145a5434d0e27db5aba8be1075b00d7"],["/2017/02/05/Android的RecyclerView/index.html","2e0183d1a2e16dee6f57cd1ee31a005e"],["/2017/02/05/Android的RecyclerView/r1.jpg","9eeec54207d455491e0b8e08e5df24dd"],["/2017/02/05/Android的RecyclerView/r2.jpg","973a10b7b0ac96ab5abb064141ad4613"],["/2017/02/05/Android的RecyclerView/r3.jpg","bc1e15be3106cbcf6e9beef4be22734b"],["/2017/02/12/Android解析json的方法/face.jpg","d1d4e6a3140cdcc50979d31cb72c1f15"],["/2017/02/12/Android解析json的方法/g1.jpg","71820d6dedf01e29832e8e2f0508ae7a"],["/2017/02/12/Android解析json的方法/g2.jpg","5c90926ac82dcbd1d3cc404e3e8aa32f"],["/2017/02/12/Android解析json的方法/g3.jpg","4c166816b8974b811aa38862b01c1919"],["/2017/02/12/Android解析json的方法/index.html","b69f4b77a0a1d20ab87a1f491fe5d248"],["/2017/02/12/全局获得Context的方法/index.html","85c02e8333cd3788b6c2b1c9ed6dc7b7"],["/2017/02/13/利用SharedPreferences存储用户名密码/face.jpg","492244640fbf7e3e850308b7cd549064"],["/2017/02/13/利用SharedPreferences存储用户名密码/index.html","430b0b225ce40f545b9881c90cb06e46"],["/2017/02/21/Java的io流笔记/face.jpg","cddb614ef8ea50373f7dab5e261e88e0"],["/2017/02/21/Java的io流笔记/index.html","2149dfecd3b5b7e8e707c331d6ac160a"],["/2017/02/24/装饰模式/index.html","08d3a9a294af4058e949d7cde7b7027d"],["/2017/02/24/装饰模式/z1.jpg","1caaff9830cfca6d1c0a6d44b634ea1d"],["/2017/02/24/装饰模式/z3.jpg","4c14ce42eeca00bfc1820bcf486abd42"],["/2017/02/26/Java的线程笔记/index.html","ade7ad76d7ef75c6744070b46420f6a5"],["/2017/02/26/Java的线程笔记/t1.jpg","531ac5ab216b6c62835ba8185a06c53b"],["/2017/02/26/Java的线程笔记/t2.jpg","f9f57bcceba663fed989ec61288d3387"],["/2017/02/26/Java的线程笔记/t3.jpg","3d31a7efb1ed0416d0e957ca4df385e3"],["/2017/02/26/Java的线程笔记/t4.jpg","32d0c8e35cc2db2236efe845622474a7"],["/2017/02/26/Java的线程笔记/t5.jpg","178da46132727f9a2c373d7a39c497c2"],["/2017/02/26/Java的线程笔记/t6.jpg","3ae197d34b60b3d74202e18804bcbca7"],["/2017/02/26/Java的线程笔记/t7.jpg","0ad16bd8e4ef1ba3e133736b9a88fedf"],["/2017/03/30/Android的NavigationView获取headerLayout组件的方法/index.html","331e9166c2d6741deb12b5c61902f075"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/face.png","c9b98aefb439fa04e587d2ee5bacf0a9"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/index.html","8a30a0b10c97b507cab436df9730cf02"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/o1.jpg","dab5e6b0ac04c512bd8521e73f57b317"],["/2017/04/16/Android使用okhttp3和handler实现简单联网交互/o2.jpg","ef761bfc2b3b095d2f978e6973e20fc0"],["/2017/04/30/mvp和mvvm框架笔记/index.html","f2c1d6ecec748d4fc37fb1d106091b8c"],["/2017/04/30/mvp和mvvm框架笔记/mvp.jpg","bf7bf997af33fddd6c725348fb220b11"],["/2017/04/30/mvp和mvvm框架笔记/mvvm.jpg","84e8ac6f4173febb3abef819c6847c1c"],["/2017/05/11/Android的fragment页面切换优化笔记/index.html","4d4ffce00543275d9812dfe72a28f8d2"],["/2017/06/15/Retrofit2笔记/index.html","da8deb258c6e3a9a351fdc34fff43a85"],["/2017/07/01/android开发艺术探索笔记/b1.jpg","a1a8c64e3f734b73f77268b8fc5f2b1f"],["/2017/07/01/android开发艺术探索笔记/b2.jpg","b307f466aed09d6c457e9f67ab029e55"],["/2017/07/01/android开发艺术探索笔记/b3.jpg","3e0b93a47b78d6d7ddbe37ce5c23388e"],["/2017/07/01/android开发艺术探索笔记/b4.jpg","d96cc8947bc932eadb35752b7d446aea"],["/2017/07/01/android开发艺术探索笔记/b5.jpg","87df47140a9a2340a7fe71640e81359e"],["/2017/07/01/android开发艺术探索笔记/face.jpg","54a7967ae6523116af00474944595736"],["/2017/07/01/android开发艺术探索笔记/index.html","d53a1aa6bd8a8960c3393e9e02db6706"],["/2017/07/01/android开发艺术探索笔记/s11.jpg","44ecc475fc71d4f1324700e2cdc3e537"],["/2017/07/16/代理模式/d1.jpg","c3b222d9b50571a393cf86fe466bee03"],["/2017/07/16/代理模式/d2.jpg","025c9760e4eb8c99cb52344d3e5af608"],["/2017/07/16/代理模式/index.html","65beca59596cba02e519a33d29dd74b2"],["/2017/07/19/BroadcastReceiver广播/g1.jpg","95acdfb4d5fc9a495a5ae576c98b286a"],["/2017/07/19/BroadcastReceiver广播/index.html","be87bfbe8c59780bed1b847d99407f6a"],["/2017/07/21/git与github快速入门/face.jpg","127e571d0e61487c6863a02f516a0cda"],["/2017/07/21/git与github快速入门/g1.jpg","16340b4a74d0bf17ab65f5ced4999896"],["/2017/07/21/git与github快速入门/g2.jpg","a6fae17935f965048679c70c04c6205a"],["/2017/07/21/git与github快速入门/g3.jpg","0f7aac4cc7e33b5c751c918d99b10711"],["/2017/07/21/git与github快速入门/g4.jpg","709037e4cccf6e25c3115eb6c2fc581c"],["/2017/07/21/git与github快速入门/g5.jpg","f9a4549ae09c867c1bfe160f2737429d"],["/2017/07/21/git与github快速入门/g6.jpg","11fcb2a3b2a0fda51c3ae1195c64bf02"],["/2017/07/21/git与github快速入门/git.jpg","f81f175b2aa60accc5be3d2938443733"],["/2017/07/21/git与github快速入门/git1.jpg","8f95b15144b6a86f51d2269957f3240e"],["/2017/07/21/git与github快速入门/git2.jpg","309085d23b2601d757722c8e87372b7a"],["/2017/07/21/git与github快速入门/index.html","82328416cdc67a27a9bb64064446df30"],["/2017/07/21/git与github快速入门/study.png","2075a23765cb6faa00fb5d9bedaf8fa4"],["/2017/07/24/Android-Butter-Knife-框架/b1.jpg","925e050934ad31922e1c83a42c26b714"],["/2017/07/24/Android-Butter-Knife-框架/b2.jpg","0eff5cb764d652afe3fb32f7960ae103"],["/2017/07/24/Android-Butter-Knife-框架/b3.jpg","c8252248c54856bbf498f781be4907fb"],["/2017/07/24/Android-Butter-Knife-框架/b4.jpg","ae76887599574d57a58d5972fadf7a6c"],["/2017/07/24/Android-Butter-Knife-框架/index.html","9b9f1c1642e41ac3930a9e57006f332e"],["/2017/07/31/一些android笔记/b1.jpg","925e050934ad31922e1c83a42c26b714"],["/2017/07/31/一些android笔记/b3.jpg","c8252248c54856bbf498f781be4907fb"],["/2017/07/31/一些android笔记/ba1.jpg","943ee61e81f33fcc4dd4018ca62fc129"],["/2017/07/31/一些android笔记/c1.jpg","2a4a4900587a645d8a0f9a7790de477c"],["/2017/07/31/一些android笔记/index.html","1502502f9877a679849e57ff3665af7b"],["/2017/07/31/一些android笔记/s1.jpg","cb3b9d67f22c02d636b12be452c13922"],["/2017/07/31/一些android笔记/s2.jpg","8fb37f9f69865a66b7c7f2a1afd0c2ae"],["/2017/07/31/一些android笔记/sb1.jpg","fb76380ff9a028e42df8490ff5c28c9b"],["/2017/07/31/一些android笔记/sw1.jpg","d5f4e22f98750e34139e8ed06bfa0418"],["/2017/08/04/Android动画笔记/index.html","9f566ac7e643c99dee93495224a5928e"],["/2017/08/09/Android-布局复习/c.gif","7e34c56d6324226c2b57dce7a28f289f"],["/2017/08/09/Android-布局复习/g1.jpg","2e7c78a7bdc1211318f1a7314bbe80e2"],["/2017/08/09/Android-布局复习/g2.jpg","f0d24aee0759cd18a0310baace202764"],["/2017/08/09/Android-布局复习/gr1.jpg","8cdfa1fbbfdb2accb783346fbf3f673f"],["/2017/08/09/Android-布局复习/index.html","5bcc1bd7c5760b0514338a1d843ef411"],["/2017/08/09/Android-布局复习/l1.jpg","22739cc4c3d40cc837f53db4c5b1e90a"],["/2017/08/09/Android-布局复习/l2.jpg","6f1efa4f3549c68d6908fa10f9fce87c"],["/2017/08/09/Android-布局复习/l3.jpg","fbfa39bfb0cc0eb0e8536c81ff696bed"],["/2017/08/09/Android-布局复习/r1.jpg","10c4c2cf2114fc08c33ee027a6e5bc2b"],["/2017/08/09/Android-布局复习/r2.jpg","7a0821279b7cfc7929ab734a3fef36cd"],["/2017/08/12/Toolbar的玩法-伪/co1.gif","e17d721c6927df2912720f9d3a0d0e1f"],["/2017/08/12/Toolbar的玩法-伪/co1j.gif","b50f90da72c46dccfe8e09cc725329b1"],["/2017/08/12/Toolbar的玩法-伪/co2.gif","71d3beb19ff87ed9c3a0fbe299ef4f0f"],["/2017/08/12/Toolbar的玩法-伪/co3.gif","63047b639a00bd4154619688d47ed80d"],["/2017/08/12/Toolbar的玩法-伪/co4.gif","e3e6d88fcff064e4f14b1541d776e431"],["/2017/08/12/Toolbar的玩法-伪/coo1.jpg","e3920ef7d5dc14f018fd3dafa390be7e"],["/2017/08/12/Toolbar的玩法-伪/index.html","8221ae57c6c01439492745bc6dad86cb"],["/2017/08/12/Toolbar的玩法-伪/t1.jpg","1688359c4b328ef1907f5c04eb498c75"],["/2017/08/12/Toolbar的玩法-伪/tt1.gif","461d4b8c8c7eeba4985a82fefe6070e0"],["/2017/09/23/RecyclerView动态切换不同布局的方法/b1.jpg","6b48198a8310bcc30059a97ff4b476a3"],["/2017/09/23/RecyclerView动态切换不同布局的方法/b2.jpg","6e59ceeab84d45219df717d324830fcf"],["/2017/09/23/RecyclerView动态切换不同布局的方法/cd.jpg","888843d84f1ba2f774ab5c25536574f6"],["/2017/09/23/RecyclerView动态切换不同布局的方法/index.html","e5321989f82f7946ffaf8af741cd0267"],["/2017/09/23/RecyclerView动态切换不同布局的方法/r1.jpg","5aa90d955fd77d28573e2b4538f4f0f4"],["/2017/09/23/RecyclerView动态切换不同布局的方法/r2.jpg","90fdd8ba0112794b5a5fe45db82fb5f9"],["/2017/09/23/RecyclerView动态切换不同布局的方法/r3.gif","889b392ff2e5eb80068dbf6f9566f27d"],["/2018/01/14/电锯惊魂8/index.html","2a51489ab307f09cf46cd7e1a4bb1a42"],["/2018/02/15/java细节笔记/face.jpg","4b85f92e1478a12013808e44a9fa1fc7"],["/2018/02/15/java细节笔记/index.html","f8be0bc613da44297ca04b12879a06c6"],["/2018/02/15/java细节笔记/java1.jpg","d2b4a31471061ae91bfe7ae06686951d"],["/2018/02/15/java细节笔记/java2.png","ed41928f8bbcb700483c50bc356b5de9"],["/2018/02/15/java细节笔记/java3.jpg","19ae81b450121dde484b47c6b6bc8428"],["/2018/02/15/java细节笔记/java4.jpg","fdc54faed81f01ff31eccd949cbb3301"],["/2018/03/04/Android-自定义View的探索/index.html","5adba9918ddb9e7c8f9ae9f8874825ef"],["/2018/03/09/Android的Drawable/index.html","442cc116b7dc248274fa2fe1fd741e90"],["/2018/03/09/Android的悬浮窗/index.html","df81682ec48cf0d84f132a535b5fcc9a"],["/2018/03/13/Android常用的ViewPager/index.html","ba22b5aa6f829d479aadf203002e515e"],["/2018/03/19/python-入门笔记/index.html","45b82fdaefa521e6ff1ce9741f541cc0"],["/2018/03/19/python-入门笔记/p1.png","63a8f0765f53686f359ac0a4a67ae314"],["/2018/03/19/python-入门笔记/p2.png","35fd4e9069231985f562f00455e97dba"],["/2018/03/19/python-入门笔记/p3.png","db283f7ef59ee5e912c5ae2082a33879"],["/2018/03/19/python-入门笔记/p4.png","93b9747abad3d81214b710e9a9d125a7"],["/2018/03/19/python-入门笔记/p5.png","139f53c418f4262b9443467124c05154"],["/2018/03/19/python-入门笔记/p6.png","4867a70e9dcc618337fe418fccad0e45"],["/2018/03/19/python-入门笔记/p7.png","1b84fff5456b5df9b5eaa67385415ff1"],["/2018/03/19/python-入门笔记/p8.png","d18cf77bf770bdc42eb4d7fb16f70ef5"],["/2018/03/19/python-入门笔记/p9.png","fa7d751e8929d604a937937c2f87bfc5"],["/2018/04/09/Android的运行时权限/index.html","2abaa5e30aae595e358858dbf96a4f15"],["/2018/04/09/Android的运行时权限/permission.png","361227ac9b061134f1e00bb0c8e4c637"],["/2018/04/22/正则表达式笔记/index.html","f2f8a8bf35f32cbbc32a491e37a67e55"],["/2018/06/10/Android串口开发的一些事/index.html","13d0a61383f8c653c8ece691bf5cb28b"],["/2018/06/10/Android串口开发的一些事/p.png","e40d530a6b1f0b49186dac2335a9a18c"],["/2018/06/23/Android的RxJava笔记/index.html","af745f4ff5d94d02b9f81edd739f2afc"],["/2018/06/23/Android的RxJava笔记/r1.png","a5211e974edd613583a510958a1dd75f"],["/2018/06/23/Android的RxJava笔记/r2.png","368b382d4454b30f25808a747e24119e"],["/2018/06/23/Android的RxJava笔记/r3.jpg","dea1e0d7a40dbf8034d2ff532a0b120e"],["/2018/06/23/Android的RxJava笔记/r4.jpg","c551db9622f9bcc9d94d9269aa285d77"],["/2018/07/04/Android的GreenDao笔记/index.html","3122f22dab504209f419ca476c58b184"],["/2018/07/15/树莓派使用日志/index.html","37ba19107bc82a9ce84379b3dae2ca34"],["/2018/07/15/树莓派使用日志/usb1.jpg","298f474c17f36c3cbe06e321821839d6"],["/2018/07/15/树莓派使用日志/vnc.jpg","47f282cd0b8cf1d42187ee203a204dfe"],["/2018/07/15/树莓派使用日志/vnc2.jpg","acf8fe4ddcba2a668f8cbf963f53ae8f"],["/2018/07/21/Java的反射与注解/f1.jpg","64132c805bb4e80400b0963d70ceb392"],["/2018/07/21/Java的反射与注解/f2.jpg","124c3de25a84f3d23fd0ec0f4f8c19fa"],["/2018/07/21/Java的反射与注解/f4.jpg","bdc07dfffc1b086dba363f54fe8a4727"],["/2018/07/21/Java的反射与注解/f5.jpg","eded410fc07761651bc07feb4b74a8b4"],["/2018/07/21/Java的反射与注解/f6.jpg","592483c81bad6c1948b68bb1beaddf61"],["/2018/07/21/Java的反射与注解/f7.jpg","919cdd4a78449826677e9197758d5f11"],["/2018/07/21/Java的反射与注解/f8.jpg","9d6ce766ec6a3421375f682200c34a81"],["/2018/07/21/Java的反射与注解/f9.jpg","88b86885c932d3c6865481b4bc411b55"],["/2018/07/21/Java的反射与注解/index.html","4957d974b2cb044c2ca5cd95bdec6d93"],["/2018/07/29/MySQL的一些记录/index.html","fd9c64dc76a5e7f0d0555d5f2682c4b6"],["/2018/07/29/MySQL的一些记录/m1.jpg","32adb1408737c7301666100f73256b6e"],["/2018/07/29/MySQL的一些记录/m10.jpg","043c4d5e41a3edd594cfa9b562e1c597"],["/2018/07/29/MySQL的一些记录/m2.jpg","a749b197e706bbef57757d6de6296104"],["/2018/07/29/MySQL的一些记录/m3.jpg","b72e05b7dbfe455f0a679f2866a128c3"],["/2018/07/29/MySQL的一些记录/m4.jpg","bfcc96c9a7e73bc511b1d4a98e058c16"],["/2018/07/29/MySQL的一些记录/m5.jpg","0efe66139d0057a636c589996cabd5bc"],["/2018/07/29/MySQL的一些记录/m6.jpg","af346a61c9ce656b584a5b6c9c3e32ea"],["/2018/07/29/MySQL的一些记录/m7.jpg","76dd372928c43bd026af2aac55474059"],["/2018/07/29/MySQL的一些记录/m8.jpg","a76576f5b9b7afbe73ae51219f25ddbe"],["/2018/07/29/MySQL的一些记录/m9.jpg","e9e7a1474316930b2b5da6ae8c1f880c"],["/2018/08/18/weex混合开发的一些记录/index.html","c7599c62353d776f2f6ae638c7d4c30f"],["/2018/08/19/网站前端的一些记录/css1.jpg","2c96c11a18b9f693cf93c4fc8f311219"],["/2018/08/19/网站前端的一些记录/css2.jpg","4c85b370f42d1544a499d40249819dcb"],["/2018/08/19/网站前端的一些记录/css3.jpg","a03790582126606827aa595ed261f1ca"],["/2018/08/19/网站前端的一些记录/css4.jpg","7db63a1c446b3add72b266375905f506"],["/2018/08/19/网站前端的一些记录/index.html","d06273acfedf33bb2f8df7f0633515f6"],["/2018/09/24/Android的AOP编程/a1.jpg","e3320b7400902b29daaabf82a0f8433a"],["/2018/09/24/Android的AOP编程/a2.jpg","c6a933b92e9fe8f3fe1e9d104de5ef2b"],["/2018/09/24/Android的AOP编程/a3.jpg","ea7405dfdcb3bcdf84bdd67fef9665ee"],["/2018/09/24/Android的AOP编程/index.html","ef519a50b2537325f659e347baa17b27"],["/2018/09/24/线性代数/index.html","ea1ac5f32754641a3f2d30a8c3091700"],["/2018/10/06/kotlin的笔记/index.html","11988a65aef1cf60e8d79d54091f2c88"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c0.jpg","3e9250998bcae8ec8bf38e962a4eb09e"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c1.jpg","80a7110fcfd46636b0eb48634b68da73"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c2.jpg","5ccdb51eb9e2728752d1e4e5c11cec3e"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c3.jpg","44717861ced23c5627de2999fa2756eb"],["/2018/11/17/ConstraintLayout和FlexboxLayout/c4.jpg","cd96746ebbf2537c9412601d6d802e02"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f0.jpg","522f86b000e9a0ddea86edfe4fde6f24"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f1.jpg","f0c7cd148f606ac0700ec90205be51de"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f2.jpg","5cad1bb88892da34d8222ff50dec1e36"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f3.jpg","a892e313628197cc4823b59992565576"],["/2018/11/17/ConstraintLayout和FlexboxLayout/f4.jpg","34ef5afd456167e41cde6cc29ebf8bae"],["/2018/11/17/ConstraintLayout和FlexboxLayout/index.html","2c1dd2e973cf08d039646adf5a30551c"],["/2019/02/01/Android传统蓝牙与低功耗蓝牙/b0.jpg","68eaadb373ebe4b890aaa61574677edb"],["/2019/02/01/Android传统蓝牙与低功耗蓝牙/b1.jpg","8d620f9fbf709f2e5386a54963adb511"],["/2019/02/01/Android传统蓝牙与低功耗蓝牙/b2.jpg","d5586188b2031542c3e7e984183fbbc9"],["/2019/02/01/Android传统蓝牙与低功耗蓝牙/index.html","774cfa706ec701efb9484123e5922579"],["/2019/03/07/几种常用的设计模式的笔记/1.jpg","5d99ffece366b613684e7e870ec608cf"],["/2019/03/07/几种常用的设计模式的笔记/2.jpg","ca6bb370a45ecd7babc402ef2bba0310"],["/2019/03/07/几种常用的设计模式的笔记/3.jpg","41a0e3686ec44fd05cb5c9ec8e9618ce"],["/2019/03/07/几种常用的设计模式的笔记/4.jpg","47e571a32b51d28164e36a3e45732c70"],["/2019/03/07/几种常用的设计模式的笔记/5.jpg","df0917aa00161c5b44049752cbd968be"],["/2019/03/07/几种常用的设计模式的笔记/6.jpg","91bba768f0085d14e91e2f1d5309f5c2"],["/2019/03/07/几种常用的设计模式的笔记/7.jpg","a4224281647af2937b7bcf6b3af2d0ae"],["/2019/03/07/几种常用的设计模式的笔记/index.html","89e9f72543669b2db4928684c82e8505"],["/2019/03/07/几种常用的设计模式的笔记/r1.png","a5211e974edd613583a510958a1dd75f"],["/2019/03/07/几种常用的设计模式的笔记/r2.png","368b382d4454b30f25808a747e24119e"],["/2019/03/17/位运算复习/index.html","5fed0a3e551d39ee3b7abd63e33bd58f"],["/2019/04/06/Android-5-x中-UsbDevice-mInterfaces为空的解决方法/index.html","fd7ec3c190e16ba30f221f996d393e86"],["/2019/04/14/Android-缓存笔记/index.html","8868c436e1dcfdbea57504138a9eb552"],["/2019/04/21/c语言回顾/index.html","7029215c6423a7db755601b796d2fb47"],["/2019/05/03/Java-只有值传递/index.html","45102edc3bbda4a532591dff2bde3e6f"],["/2019/05/03/Java-只有值传递/j.jpg","d7514977bbedbb72eb59c7c776eac978"],["/2019/07/14/smali语法笔记/index.html","a1c024efb4f6e3dece3911c44fc33bf6"],["/2019/10/03/linux基本操作笔记/index.html","a6f02df6d16236b8258c9c39ee7b68af"],["/2020/01/04/Android自定义view-测量与布局/index.html","81d9bf446d64d7467cd7539362bf8f30"],["/2020/02/13/Android自定义view-几种刷新方法的区别/index.html","a01ff64fab7bdee1f2ca4358c96f7ea2"],["/2020/02/13/Android自定义view-手势与滑动/1.gif","2687f70b2aa61db0bf3a6d5bb9ba8fdb"],["/2020/02/13/Android自定义view-手势与滑动/index.html","ac3b91d6a9309647639efd9c70978774"],["/2020/02/15/Android自定义view-多点触控与拖拽/1.png","273fbe21c61c1a1951217f1c62fbbe7c"],["/2020/02/15/Android自定义view-多点触控与拖拽/2.gif","c201e50651c1cac9e090f71e541a3e28"],["/2020/02/15/Android自定义view-多点触控与拖拽/index.html","da3dc7e831ad08d4c2140e46f6bf12d2"],["/2020/03/15/cpp回顾/index.html","875acb2eae6fbc3715eb404bd0a35724"],["/2020/03/28/JNI笔记/1.png","c34dcf3fe063448902c7e8ddaad13966"],["/2020/03/28/JNI笔记/2.png","7488c80c8aeb5bb599cde436ab917111"],["/2020/03/28/JNI笔记/3.png","35875cfa58ac95f2e1c1f6e6fd9bcb8d"],["/2020/03/28/JNI笔记/index.html","bcecca4941ba8805a0daaad6afe58614"],["/archives/2016/10/index.html","0e78fb3691b5a69069716f5777cfbf3f"],["/archives/2016/index.html","8e54a3d44fd35e227e199ff145aead2b"],["/archives/2017/01/index.html","39901714f5657da96ab9e68ac4d1f527"],["/archives/2017/02/index.html","f6b8506453669949f04fec08ab7ab7cd"],["/archives/2017/03/index.html","4951ce2b1c4e99769f11e0a021a82e0a"],["/archives/2017/04/index.html","70bf11dbb7bcbdad78b700d03d8224e8"],["/archives/2017/05/index.html","d4a19fe2bbf5edea6bcbedb0f7d29afd"],["/archives/2017/06/index.html","22ba5f7350687691f82f22975cc62f79"],["/archives/2017/07/index.html","6d083f70c52732aa94beecbfe6549440"],["/archives/2017/08/index.html","bd815b77c5609e5353d8efedb2a1191b"],["/archives/2017/09/index.html","5f710160b004d028a7efb2a44de141d3"],["/archives/2017/index.html","ace6cc226ef25f5d0c012bc8eb9ddd17"],["/archives/2017/page/2/index.html","8ed1f7c89f94ab1cde1725a95ca095da"],["/archives/2017/page/3/index.html","2f540d571b04deb6322f25c01936e127"],["/archives/2017/page/4/index.html","e1fcdbaf9bfd6317b8a1eac28329aa9e"],["/archives/2018/01/index.html","66741bf0515076166ff0109e0dda2552"],["/archives/2018/02/index.html","4b9a73cf45354db13d0d8e1b8c5ba790"],["/archives/2018/03/index.html","15705ab937f5b407acc75730f1b45a6e"],["/archives/2018/04/index.html","751d298747081b78fdee140cf257b4b8"],["/archives/2018/06/index.html","600e58724bdf715203b75d730bc22039"],["/archives/2018/07/index.html","726d21c86144ba5115912897084e85d5"],["/archives/2018/08/index.html","4f5978b5b10f2520bc8a19fce77b852b"],["/archives/2018/09/index.html","1adb60bd82e1f859bdfc12ffdf1f3f85"],["/archives/2018/10/index.html","6f3ea23d7b301a45f4b12627bb6afe68"],["/archives/2018/11/index.html","ea7b211cf74e5b946dd561c132343e45"],["/archives/2018/index.html","75675d5cf18eb55fa013eefe711e9880"],["/archives/2018/page/2/index.html","9bfbe2197f84b0e3af141ca1ed01cd37"],["/archives/2018/page/3/index.html","6a4a2040ba77c562f14e4a6844ea0dde"],["/archives/2019/02/index.html","3f38a91ce5ca17da076f0dd6016cf0ec"],["/archives/2019/03/index.html","27cf4ab7d6cc3ace968e220b541bbd36"],["/archives/2019/04/index.html","d7822fc77418f1e3b69fbd62eff6f9d8"],["/archives/2019/05/index.html","1b7be8e9ab65e68d6ff472f8a2866393"],["/archives/2019/07/index.html","a38f2c3e0b72e9ea109de33742f2e848"],["/archives/2019/10/index.html","075dbd774b6b46003e00050bce371b24"],["/archives/2019/index.html","7926ab25dd154849d7429d783c85d02d"],["/archives/2020/01/index.html","76a70471c3b6a2934d34073e72cb35ca"],["/archives/2020/02/index.html","9ce870b1124c82cdd9bd387e49c7d98c"],["/archives/2020/03/index.html","add8536527a1808583293261e02f585c"],["/archives/2020/index.html","173a1c99644df3ab212c57ea24c262d5"],["/archives/index.html","2ce57a25aa5bfdccd554c5d77523e3a9"],["/archives/page/2/index.html","64c2b7e213ab6fcea58be6e817df9e8b"],["/archives/page/3/index.html","e026e4a7b633f0c7b28ceb7d4e1925a4"],["/archives/page/4/index.html","e68ac2af6fe3d43061d6b170ac38e4b5"],["/archives/page/5/index.html","8aaeaf57849ffd124cfd0a7fe00e9be5"],["/archives/page/6/index.html","70d557807446575fcfdb861854a7e6c5"],["/archives/page/7/index.html","ae1065019519764fbb829ccca68b7ac6"],["/archives/page/8/index.html","8a1d9281987bd29d76d13a5463fc130c"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/css/main.css","85dfbba7a12fa8955adae0a3df035237"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/1.jpg","74026237ccdeaf9d93b3ceb5ed10ccad"],["/img/yufa.png","8719de11346fe52ed128e85324096dfc"],["/index.html","4e7ed6f8b13d3490b36e434003f222ac"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["/lib/canvas-nest/README.html","ba641dcbbccca525d31c9b0df457fb92"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/reading_progress/README.html","cba0ed02d31992ca4ee39c80d77ce373"],["/lib/reading_progress/reading_progress.js","3acf7b58abf798b2007eeee69c9009a6"],["/lib/reading_progress/reading_progress.min.js","dd4f298c9228f42432e143f190ee03f5"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/2/index.html","45692a1389827e353df774eb851bf19c"],["/page/3/index.html","7e2e6f0b1f3eec73bf4abbc1054a624a"],["/page/4/index.html","753e56cb9982f97f443e528bea86e740"],["/page/5/index.html","bc9a57ac349acdc0e3917a8fb9a0b94d"],["/page/6/index.html","a7d77422e711e47f6a29dc29f8bd91b4"],["/page/7/index.html","c72b9540110b2173230e962569ac0026"],["/page/8/index.html","edc3f292153bad71e4814c58f85cc88f"],["/sw-register.js","187dcf2e4c42c557c93bdf07c6bd9fa2"],["/tags/Android-串口/index.html","e46ca1db01e369c5394832e778a26195"],["/tags/Android-数据库/index.html","9a1c53c80bf1dd7b720e9ed9e7a7d2ee"],["/tags/Android-蓝牙/index.html","30a04d089dc1bf5eb60f57ce9abb9dd2"],["/tags/Android/index.html","deceba4257fc08bb0c9b80d3361f4be4"],["/tags/Android/page/2/index.html","78699c944b8b13bc74c6204096609fcd"],["/tags/Android/page/3/index.html","5c155a160accc88775acaf30a897a38f"],["/tags/Android安全/index.html","bfcc673a170e0ad36e7c7b76d27a9c04"],["/tags/Android布局/index.html","ffa3994a83e473652fb63d058ca9c4e4"],["/tags/Android系统/index.html","2d3eb9f524b11632f84720e10077d95b"],["/tags/JNI/index.html","81fe917e9abd5ecde9151c93d8f4c6ab"],["/tags/Java笔记-设计模式/index.html","2a1af3e280e02ab404a24c78952f12ea"],["/tags/Java笔记/index.html","5f7cc147b5bbc875cc14821d018769e4"],["/tags/Kotlin/index.html","a992b0ff6586ae0b4b3fa4f35b5e6ce4"],["/tags/Python/index.html","585ea17ea62ae6f37f85955df023b702"],["/tags/cpp/index.html","3a46226a187eb481b796e8746e54dc82"],["/tags/c语言/index.html","5df0e878b2a2b7e9355947902ce7b03d"],["/tags/git/index.html","ebf0f1f0a6c7d835073e4459ab06ed64"],["/tags/index.html","3a7b13060d52bf7330d77e183bc74a29"],["/tags/linux/index.html","cf8174952fa13def9a10443abe9356fe"],["/tags/weex/index.html","8676250c33db09cc543b43b6fa4a3610"],["/tags/京东/index.html","755ffcfab14a61d4db65803823cdfe25"],["/tags/位运算/index.html","1b5c3eb36dce7a15881f8b8164e07503"],["/tags/大新闻/index.html","497467dd7438e5113f2cefb8f01fd9f2"],["/tags/数据库-MySQL/index.html","5d90e1f262ef7366793eda4cb41d518b"],["/tags/树莓派/index.html","c0ff4f366d8371824bb2598770611619"],["/tags/线性代数/index.html","8bde057044357c45e39ba2bcb4775578"],["/tags/缓存/index.html","c13a9edb450b84967667d67190875ebb"],["/tags/网站前端/index.html","14d30e0fab90eecc1d73838b10563bc6"],["/tags/翻墙/index.html","a6afa0496a3899b8a77da35fa99e53cc"],["/tags/自定义View/index.html","be1e98d66656dab0ca5fb7ee66d1f607"],["/tags/面向切面-AOP/index.html","c7b22439feb0a8d89af93b3db46add5e"]];
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
