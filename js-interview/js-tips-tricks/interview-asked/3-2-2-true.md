```javascript
console.log(3 < 2 < 1);
```

The output of the code `console.log(3 < 2 < 1);` is `true`.

This might seem counterintuitive at first, but let's break it down:

1. `3 < 2` evaluates to `false` because 3 is not less than 2.
2. So, the expression becomes `false < 1`.

In JavaScript, when using the less than (`<`) operator, if one operand is of a different type than the other, JavaScript will try to convert both operands to numbers. In this case, `false` gets converted to `0` and `1` remains as it is. So, effectively, you have `0 < 1`, which is `true`.

Hence, the output is `true`.
