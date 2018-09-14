# JavaScript数据类型——字符串String
## 字符串简介
字符串是基本数据类型之一，由零个或多个字符按照序列进行排列而组成，通常放在单引号或双引号中。在JavaScript中，内置了很多对字符串的操作方法。
## 常见的字符串操作方法
1. 字符串长度（length）
<br/>字符串可以使用length来获取其自身的字符长度
```
var str = 'string'
str.lenth // 6

var str = 'string\n'  // 需要注意上面的转义字符，例如\n只是一个字符。
str.lenth // 7
```
2. 字符串索引（下标，charAt(index)，charCodeAt(index)）
* 字符串下标
<br/>通过下标获取对应顺序的字符串
```
var str = 'string'
str[0] // s
```
<br />通过与length配置获取字符
```
var str = 'string'
str[str.length - 1] // g 获取倒数第一个字符
```
* charAt(index)和charCodeAt(index)方法
<br />charAt()方法的功能和使用下标对字符串中的字符进行检索是一样的。
```
var str = 'string'
str.charAt(0) // s
var str = ''
str.charAt(3) // "" 如果字符串为空，无论索引值是几，都返回空
```
<br />charCodeAt()方法是通过下标检索字符串中的某个字符，然后返回它的ASCII码

```
var str = 'string'
str.charCodeAt(0) // 105
var str2 = ''
str2.charCodeAt(0) // NaN 空字符串返回NaN
var str3 = ' '
str3.charCodeAt(0) // 32 空格对应的ASCII码
```
3. 字符串截取
* substr(startIndex, length)方法截取字符串，第一个参数为从什么地方开始截取索引，第二个参数是截取长度。
```
var str = 'string'
str.substr(1, 2) // "tr"
```
* substring(startIndex, endIndex)方法截取字符串，跟substr()相比，第一个参数也是开始截取的索引，第二个参数不同的是结束截取的索引，并且该索引字符不包括在内。
```
var str = 'string'
str.substring(1,3) // "tr"
```
* slice(startIndex, endIndex)与substring()类似，有一点不同的是slice()接受负参，而substring()有负参将直接转化为0;slice()负参中，-1表示最后一位，其他以此类推。
```
var str = 'string'
str.slice(1,2) // "t"
str.slice(1,-1) // "trin"
```
4. 字符串的查找和替换
* search(str|[regexp])方法接受一个需要查找的字符，如果有就返回该字符在字符串中的下标，否则返回-1。search()方法只返回匹配到的第一个查找到的字符的下标。
```
var str = 'string'
str.search('s') // 0
var str2 = 'string100'
str.search(/[0-9]/) // 6 返回第一个数字的索引
```
* match(regexp)方法搭配正则使用，支持全局匹配，返回一个数组
```
var str = 'string123'
str.match(/[0-9]/) // ["1", index: 6, input: "string123", groups: undefined]
str.match(/[0-9]/g) // ['1','2','3']
```
*indexOf(searchValue,[fromIndex])和lastIndexOf(value)
<br />indexOf()从前往后开始查找第一个匹配的字符，并返回索引
<br />lastIndexOf()从后往前查找第一个匹配的字符，并返回索引，否则不匹配返回-1

