// tables and fields - model is the structure and relationship between entities(table)

// js prop / db field -> Attribute
// js obj / db tables -> Entity

class Attr{
    constructor(name, value="", displayName=""){
        this.name = name;
        this.value = value;
        this.displayName = displayName ? displayName : name;
    }
}

class Entity{
    constructor(name, attrList=[]){
        this.name = name;
        this.attrList = attrList;
    }
    getAttrNames(){
        return this.attrList.map(a=>a.name).join(", ");
    }
    getAttrValues(){
        return this.attrList.map(a=>`'${a.value}'`).join(", ");
    }
    create(){ //INSERT
        let sql = `
            INSERT INTO ${this.name} 
            (${this.getAttrNames()})
            VALUES 
            (${this.getAttrValues()});
        `;
        //TODO
        return sql;
    }
    read(){
        let sql = ""
        //TODO
        return sql;
    }
    update(){
        let sql = ""
        //TODO
        return sql;
    }
    delete(){
        let sql = ""
        //TODO
        return sql;
    }
}

// TEST
up = new Entity("user_profile", [
    new Attr("id", 1),
    new Attr("username", "kevinelong"),
    new Attr("password", "secret"),
]);

sql = up.create();
//const resultSet = DB.query(sql);
console.log(sql)
