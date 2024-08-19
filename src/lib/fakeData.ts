export default function getFakeVisaData() {
    let res = []
    for(let i = 0; i < 20; i++) {
        res.push({
            id: "728ed52f",
            submitTime: new Date("2023-01-01T00:00:00Z"),
            endTime: new Date("2023-01-01T00:00:00Z"),
            ifIncludedCouple: true,
            ifTogether:true,
            major:'食品',
            educationLevel:'博士',
            educationType:'其他',
            submitPlace:'境外',
            ifDIY:true,
            infoFrom:'自己'
          })
    }
    return res
}