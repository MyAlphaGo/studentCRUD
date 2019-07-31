/**
 * 操作数据的API文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */

const fs = require("fs");

const dbPath = "./views/db.json";


/**
 * @description 查询所有学生
 * @param {function} callback
 */
exports.find = function (callback) {
    fs.readFile(dbPath, (error, data) => {
        if (error) {
            return callback(err);
        }
        callback(null, JSON.parse(data).students);
    })
}

/**
 * @description 根据id查找学生
 * @param {string} id
 * @param {function} callback
 */
exports.findById = (id,callback) => {
    fs.readFile(dbPath, (error, data) => {
        if(error){
            return callback(error);
        }
        let students = JSON.parse(data).students;
        let student = students.find(item=>{
            return item.id === parseInt(id)
        })
        return callback(null,student);
    })
}

/**
 * @description 添加学生
 * @param {Object} student
 * @param {function} callback
 */
exports.add = function (student, callback) {
    fs.readFile(dbPath, "utf8", (error, data) => {
        if (error) {
            return callback(error);
        }
        //将 json 文件中的数据读取出来并且转化为对象
        let students = JSON.parse(data).students;
        //给新的学生编辑 id
        student.id = students[students.length - 1].id + 1;
        student.gender = parseInt(student.gender);
        //将这个学生添加到学生数组中
        students.push(student);
        //将学生数组重新转化为字符串
        let fileData = JSON.stringify({
            students: students
        })
        //上面的学生数据重新写到文件中
        fs.writeFile(dbPath, fileData, (err) => {
            if (err) {
                return callback(err);
            }
            return callback(null);
        })
    })
}
/**
 *更新学生信息
 * @param {object} student
 * @param {Function} callback
 */
exports.updata = function (student, callback) {
    fs.readFile(dbPath, "utf8", (error, data) => {
        if (error) {
            return callback(error);
        }
        let students = JSON.parse(data).students;
        student.id = parseInt(student.id);
        let stu = students.find(item => {
            return item.id === student.id;
        })
        for (let key in student) {
            stu[key] = student[key];
        }
        let fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, (error) => {
            if (error) {
                return callback(error);
            }
            return callback(null);
        })

    })
}


/**
 * @description 删除学生
 * @param {string} id
 * @param {function} callback
 */
exports.deleteById = function (id, callback) {
    fs.readFile(dbPath, "utf8", (error, data) => {
        if (error) {
            return callback(error);
        }
        let students = JSON.parse(data).students;
        let index = students.findIndex(item => {
            if (item.id === parseInt(id)) {
                return true;
            }
        })
        students.splice(index, 1);

        let fileDate = JSON.stringify({
            students:students
        })
        fs.writeFile(dbPath,fileDate,(error)=>{
            return callback(error);
        })
        return callback(null);
    })
}
