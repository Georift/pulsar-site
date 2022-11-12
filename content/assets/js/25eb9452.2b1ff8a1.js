"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[81199],{3905:(e,n,a)=>{a.d(n,{Zo:()=>l,kt:()=>d});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},l=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?t.createElement(f,i(i({ref:n},l),{},{components:a})):t.createElement(f,i({ref:n},l))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81468:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=a(87462),r=(a(67294),a(3905));const o={id:"functions-package-java",title:"Package Java Functions",sidebar_label:"Package Java Functions"},i=void 0,c={unversionedId:"functions-package-java",id:"functions-package-java",title:"Package Java Functions",description:"For the runtime Java version, refer to Pulsar Runtime Java Version Recommendation according to your target Pulsar version.",source:"@site/docs/functions-package-java.md",sourceDirName:".",slug:"/functions-package-java",permalink:"/docs/next/functions-package-java",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/functions-package-java.md",tags:[],version:"current",frontMatter:{id:"functions-package-java",title:"Package Java Functions",sidebar_label:"Package Java Functions"},sidebar:"docsSidebar",previous:{title:"How to package",permalink:"/docs/next/functions-package"},next:{title:"Package Python Functions",permalink:"/docs/next/functions-package-python"}},p={},s=[],l={toc:s};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For the runtime Java version, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/README.md#pulsar-runtime-java-version-recommendation"},"Pulsar Runtime Java Version Recommendation")," according to your target Pulsar version.")),(0,r.kt)("p",null,"To package a Java function, complete the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new maven project with a pom file. In the following code sample, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"mainClass")," is your package name."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},' <?xml version="1.0" encoding="UTF-8"?>\n <project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n     <modelVersion>4.0.0</modelVersion>\n\n     <groupId>java-function</groupId>\n     <artifactId>java-function</artifactId>\n     <version>1.0-SNAPSHOT</version>\n\n     <dependencies>\n         <dependency>\n             <groupId>org.apache.pulsar</groupId>\n             <artifactId>pulsar-functions-api</artifactId>\n             <version>2.10.0</version>\n         </dependency>\n     </dependencies>\n\n     <build>\n         <plugins>\n             <plugin>\n                 <artifactId>maven-assembly-plugin</artifactId>\n                 <configuration>\n                     <appendAssemblyId>false</appendAssemblyId>\n                     <descriptorRefs>\n                         <descriptorRef>jar-with-dependencies</descriptorRef>\n                     </descriptorRefs>\n                     <archive>\n                     <manifest>\n                         <mainClass>org.example.test.ExclamationFunction</mainClass>\n                     </manifest>\n                 </archive>\n                 </configuration>\n                 <executions>\n                     <execution>\n                         <id>make-assembly</id>\n                         <phase>package</phase>\n                         <goals>\n                             <goal>assembly</goal>\n                         </goals>\n                     </execution>\n                 </executions>\n             </plugin>\n             <plugin>\n                 <groupId>org.apache.maven.plugins</groupId>\n                 <artifactId>maven-compiler-plugin</artifactId>\n                 <configuration>\n                     <release>17</release>\n                 </configuration>\n             </plugin>\n         </plugins>\n     </build>\n\n </project>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Package your Java function."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," mvn package\n")),(0,r.kt)("p",{parentName:"li"},"After the Java function is packaged, a ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," directory is created automatically. Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," directory to check if there is a JAR package similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"java-function-1.0-SNAPSHOT.jar"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the packaged jar file to the Pulsar image."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," docker exec -it [CONTAINER ID] /bin/bash\n docker cp <path of java-function-1.0-SNAPSHOT.jar>  CONTAINER ID:/pulsar\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the Java function using the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," ./bin/pulsar-admin functions localrun \\\n --classname org.example.test.ExclamationFunction \\\n --jar java-function-1.0-SNAPSHOT.jar \\\n --inputs persistent://public/default/my-topic-1 \\\n --output persistent://public/default/test-1 \\\n --tenant public \\\n --namespace default \\\n --name JavaFunction\n")),(0,r.kt)("p",{parentName:"li"},"The following log indicates that the Java function starts successfully."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"}," ...\n 07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n ...\n")))))}u.isMDXComponent=!0}}]);