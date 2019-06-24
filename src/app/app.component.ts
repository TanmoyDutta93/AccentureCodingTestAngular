import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Please open the browser console to see the output.';
  arrKeys: string[] = [];
  x: string = "class property";

  constructor() {
  }
 
  ngOnInit() {
    this.qu1(); //Question No. 1
    this.qu2(); //Question No. 2
    this.qu3(); //Question No. 3
    this.qu4(); //Question No. 4
    this.qu5(); //Question No. 5
  }

  //Question No. 1 - start
  qu1() {
    console.log("Question No. 1: this vs let");
    console.log(`[“this”] and [“let”] are keywords used in typescript, 
where variables declared with “let” are only valid within the scope. 
Whereas “this” is used to access members of a class.`);
    let x: string = "scoped variable";
    console.log("“this.x” is a " + this.x);
    console.log("“let x” is a " + x);
  }
  //Question No. 1 - end

  //Question No. 2 - start
  qu2() {
    console.log("Question No. 2: Array to Map");
    let strArray: string[] = ["hello world", "hello world"];
    console.log("Input:");
    console.log(strArray);
    let result: Map<string, number> = this.getCharCount(strArray);
    console.log("Output:");
    console.log(result);
  }

  getCharCount(strArrayInput) {
    let strInput: string = strArrayInput.join('').toString();
    let charCountMap: Map<string, number> = new Map<string, number>();
    for (let i = 0; i < strInput.length; i++) {
      let char: string = strInput.charAt(i);
      if (charCountMap.has(char)) {
        charCountMap.set(char, charCountMap.get(char) + 1);
      } else {
        charCountMap.set(char, 1);
      }
    }
    return charCountMap;
  }
  //Question No. 2 - end

  //Question No. 3 - start
  qu3() {
    console.log("Question No. 3: Fetch all keys from an object");
    console.log("Input: ");
    let obj = {
      a: 5,
      b: {
        c: {
          d: 10,
          e: {
            f: 15
          }
        }
      }
    };
    console.log(obj);
    console.log("Output: ");
    console.log(this.getKeys(obj));
  }

  getKeys(inputObject) {
    for (let key in inputObject) {
      this.arrKeys.push(key);
      if (inputObject[key] instanceof Object) {
        this.arrKeys = this.getKeys(inputObject[key]);
      }
    }
    return this.arrKeys;
  }
  //Question No. 3 - end

  //Question No. 4 - start
  qu4() {
    console.log("Question No. 4: Reverse string");
    let inputString: string = "Hello World";
    console.log("Input: " + inputString);
    console.log("Output with split and reverse: " + this.getReversedStringWithSplitAndReverse(inputString));
    console.log("Output without split and reverse: " + this.getReversedStringWithOutSplitAndReverse(inputString));
  }

  getReversedStringWithSplitAndReverse(inputStr) {
    return inputStr.split("").reverse().join("").toString();
  }

  getReversedStringWithOutSplitAndReverse(inputStr) {
    let outputStringArr: string[] = [];
    for (let i = inputStr.length - 1; i >= 0; i--) {
      outputStringArr.push(inputStr.charAt(i));
    }
    return outputStringArr.join("").toString();
  }
  //Question No. 4 - end

  //Question No. 5 - start
  qu5() {
    console.log("Question No. 5: Remove duplicate string");
    let inputStringArray: string[] = ["apple", "banana", "apple", "mango", "orange", "apple", "orange"];
    console.log("Input: ");
    console.log(inputStringArray);
    console.log("Output: ");
    console.log(this.getDistinctStringArray(inputStringArray));
  }

  getDistinctStringArray(inptStrArr) {
    return inptStrArr.filter((value, index) => index == inptStrArr.indexOf(value));
  }
  //Question No. 5 - end
}
