const o={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift: "swift"

}

const programming =['js','rb','lu']
for (const i in o) {
    if (!Object.hasOwn(o, i)) continue;
    
    console.log(i," ",o[i]);
    
    
}
