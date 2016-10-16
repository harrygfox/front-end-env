# front-end-env

[![devDependencies](https://david-dm.org/harrygfox/front-end-env/dev-status.svg?style=flat)](https://david-dm.org/harrygfox/front-end-env#info=devDependencies)

## What?

A neat front-end development environment that auto-compiles and minifies sass partials.

## Why?

- Sass is great for modularising parts of the stylesheet. 
- Minified files are great for the browser. 


##How?


`npm i` to install all dependencies.

direct gruntfile to your specified source and destination folders.

Those used here are from the uncompiled `scss/main.scss` to the minified `src/css/main.min.css`

`grunt` to run all tasks and watch sass partials nested one folder deep in the `scss` folder. 

-------

## When Running

**Errors with the SCSS** will be displayed in the terminal:

```bash
Running "sass:dist" (sass) task
>> Error: Invalid CSS after "    font-size:": expected expression (e.g. 1px, bold), was "}"
>>         on line 2 of scss/components/_copy.scss
>> >>     font-size:
>>    --------------^
Warning:
Warning: Invalid CSS after "    font-size:": expected expression (e.g. 1px, bold), was "}"

Running "watch" task
Waiting...

```

When resolved simply save the file and:

```bash
>> File "scss/components/_copy.scss" changed.

Running "sass:dist" (sass) task

Running "cssmin:target" (cssmin) task
>> 1 file created. 668 B → 416 B

Running "watch" task
Completed in 0.014s at Sun Oct 16 2016 12:16:30 GMT+0100 (BST) - Waiting...

```

**Errors with the build** i.e. a missing partial will be displayed in the terminal: 

```bash
Running "sass:dist" (sass) task
>> Error: File to import not found or unreadable: components/copy
>>        Parent style sheet: /Users/harryfox/dev/front-end-env/scss/main.scss
>>         on line 8 of scss/main.scss
>> >> @import
>>    ^
Warning:
Warning: File to import not found or unreadable: components/copy
Parent style sheet: /Users/harryfox/dev/front-end-env/scss/main.scss

Running "watch" task
Waiting...
```

Grunt then watches the files for more changes, waiting for the correction to be made:

```bash
>> File "scss/components/_cop.scss" deleted.
>> File "scss/components/_copy.scss" renamed.

Running "sass:dist" (sass) task

Running "cssmin:target" (cssmin) task
>> 1 file created. 668 B → 416 B

Running "watch" task
Completed in 0.016s at Sun Oct 16 2016 12:19:14 GMT+0100 (BST) - Waiting...
```