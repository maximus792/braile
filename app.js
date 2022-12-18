class Num {
  set(a1, a2, b1, b2, c1, c2, n) {
    this.a1 = a1;
    this.a2 = a2;
    this.b1 = b1;
    this.b2 = b2;
    this.c1 = c1;
    this.c2 = c2;
    this.n = n;
  }

  show() {
    return `
    <div class="container-num">
        <div class="nvalue">
            <div class="line line1"><span class="n1">${
              this.a1 ? "•" : "∙"
            }</span> <span class="n2">${this.a2 ? "•" : "∙"}</span></div>
            <div class="line line2"><span class="n1">${
              this.b1 ? "•" : "∙"
            }</span> <span class="n2">${this.b2 ? "•" : "∙"}</span></div>
            <div class="line line3"><span class="n1">${
              this.c1 ? "•" : "∙"
            }</span> <span class="n2">${this.c2 ? "•" : "∙"}</span></div>
        </div>
        <div >${this.n}</div>
        </div>
        `;
  }
}

const parse = (val) => {
  var finalval = latex_to_js(val);

  finalval = finalval
    .replaceAll("\\frac{", "(")
    .replaceAll("sqrt", "")
    .replaceAll("}", ")")
    .replaceAll("{", "(");

//   console.log(finalval);
  return finalval;
};


var addl = true;
var numin = false;

const values = document.querySelector(".values");
var l = new Num();
l.set(0, 1, 0, 1, 1, 1, "Signe");
var num = new Num();
const mf = document.querySelector(".mathfield");
var inpvalue = mf.innerHTML;
show();

mf.addEventListener("input", () => {
  inpvalue = mf.value;
  show();
});

function show() {
  values.innerHTML = "";
  var val = parse(inpvalue);
  for (var i = 0; i < val.length; i++) {
    // num.set(0, 1, 0, 1, 1, 1, "Simbol")

    switch (val[i]) {
      //simbols
      case "(":
        // console.log(val[i]);
        // console.log(numin, addl);
        numin = false;
        addl = false;
        num.set(1, 0, 1, 0, 0, 1, "(");
        break;
      case ")":
        // console.log(val[i]);
        // console.log(numin, addl);
        numin = false;
        addl = false;
        num.set(0, 1, 0, 1, 1, 0, ")");
        break;
      case "+":
        // console.log(val[i]);
        // console.log(numin, addl);
        numin = false;
        addl = false;
        num.set(0, 0, 1, 1, 1, 0, "+");
        break;
      case "-":
        // console.log(val[i]);
        // console.log(numin, addl);
        numin = false;
        addl = false;
        num.set(0, 0, 0, 0, 1, 1, "-");
        break;
      case "*":
        // console.log(val[i]);
        // console.log(numin, addl);
        numin = false;
        addl = false;
        num.set(0, 0, 1, 0, 1, 1, "*");
        break;
      case "/":
        // console.log(val[i]);
        // console.log(numin, addl);
        numin = false;
        addl = false;
        num.set(0, 0, 1, 1, 0, 1, "/");
        break;

      //nums
      case "1":
        // console.log(val[i]);
        // console.log(numin, addl);
        if (!numin) {
          numin = true;
          addl = true;
        } else {
          addl = false;
        }
        num.set(1, 0, 0, 0, 0, 0, "1");
        break;
      case "2":
        // console.log(val[i]);
        // console.log(numin, addl);
        if (!numin) {
          numin = true;
          addl = true;
        } else {
          addl = false;
        }
        num.set(1, 0, 1, 0, 0, 0, "2");
        break;
      case "3":
        // console.log(val[i]);
        // console.log(numin, addl);
        if (!numin) {
          numin = true;
          addl = true;
        } else {
          addl = false;
        }
        num.set(1, 1, 0, 0, 0, 0, "3");
        break;
      case "4":
        // console.log(val[i]);
        // console.log(numin, addl);
        if (!numin) {
          numin = true;
          addl = true;
        } else {
          addl = false;
        }
        num.set(1, 1, 0, 1, 0, 0, "4");
        break;
      case "5":
        // console.log(val[i]);
        // console.log(numin, addl);
        if (!numin) {
          numin = true;
          addl = true;
        } else {
          addl = false;
        }
        num.set(1, 0, 0, 1, 0, 0, "5");
        break;
      case "6":
        // console.log(val[i]);
        // console.log(numin, addl);
        if (!numin) {
          numin = true;
          addl = true;
        } else {
          addl = false;
        }
        num.set(1, 1, 1, 0, 0, 0, "6");
        break;
      case "7":
        // console.log(val[i]);
        // console.log(numin, addl);
        if (!numin) {
          numin = true;
          addl = true;
        } else {
          addl = false;
        }
        num.set(1, 1, 1, 1, 0, 0, "7");
        break;
      case "8":
        // console.log(val[i]);
        // console.log(numin, addl);
        if (!numin) {
          numin = true;
          addl = true;
        } else {
          addl = false;
        }
        num.set(1, 0, 1, 1, 0, 0, "8");
        break;
      case "9":
        // console.log(val[i]);
        // console.log(numin, addl);
        if (!numin) {
          numin = true;
          addl = true;
        } else {
          addl = false;
        }
        num.set(0, 1, 1, 0, 0, 0, "9");
        break;
      case "0":
        // console.log(val[i]);
        // console.log(numin, addl);
        if (!numin) {
          numin = true;
          addl = true;
        } else {
          addl = false;
        }
        num.set(0, 1, 1, 1, 0, 0, "0");
        break;

      default:
        break;
    }
    values.innerHTML += `${addl ? l.show() : ""}${num.show()}`;
  }
}
