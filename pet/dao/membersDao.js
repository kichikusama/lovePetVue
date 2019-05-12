const { membersModel } = require("./Models/membersModel.js");

module.exports.addMembers = async function (data) {
    return await membersModel.create(data);
}

//(当前页，每页显示条数,查询类型,查询关键字)
module.exports.getMembers = async function ({ currentPage, eachPage, type, text }) {
    let total; // 获取总条数
    let members;
    if (text) {
        members = await membersModel
            .find({
                [type]: { $regex: [text], $options: '$i' },
                // shopType:"0" //是否需要查看状态值（申请中,未申请）
            })
            .skip((currentPage - 1) * eachPage).limit(eachPage - 0);
        let counts = await membersModel
            .find({
                [type]: { $regex: [text], $options: '$i' },
                // shopType:"0" //是否需要查看状态值（申请中,未申请）
            })
            total = counts.length
    } else {
        members = await membersModel.find(
            // shopType:"0" //是否需要查看状态值（申请中,未申请）
        ).skip((currentPage - 1) * eachPage).limit(eachPage - 0);
        let counts = await membersModel.find(
            // shopType:"0" //是否需要查看状态值（申请中,未申请）
            );
        total = counts.length
    }
    let pageData = {
        currentPage: currentPage - 0, // 当前页面
        eachPage, // 每页显示条数
        total, // 总条数
        members, // 宠主集合
    };
    return pageData;
}

module.exports.deleteMembers = async function ({id}) {
    return await membersModel.deleteOne({ _id:id }, (err, data) => { })
}