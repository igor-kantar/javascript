class Group{
    constructor(){
        this.group = []
    }
    add(val){
        if (!this.has(val))
            this.group.push(val)
    }
    delete(val){
        if (this.has(val))
            this.group = this.group.filter(elem => elem !== val)
    }
    has(val){
        for(const elem of this.group)
            if(elem===val)
                return true
        return false
    }
    static from(iterable){
        let newGroup = new Group()
        iterable.forEach(element => {
            newGroup.add(element)
        });
        return newGroup
    }
}

let group = Group.from([10, 20]);

console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false