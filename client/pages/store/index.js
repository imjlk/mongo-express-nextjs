import { useState } from 'react'
import data from '../../public/assets/data/서울교통공사_지하상가임대정보_20220315.json'

function StoreList() {
  const [stores, setStores] = useState(data)

  return (
    <div className="flex-1">
      <h1>서울교통공사 지하상가임대정보</h1>
      <p className="mb-4">기준일: 2022-03-15</p>

      <div className="flex">
        <div className="flex-1">순번</div>
        <div className="flex-1">상점상태</div>
        <div className="flex-1">호선번호</div>
        <div className="flex-1">호선명</div>
        <div className="flex-1">상점번호</div>
        <div className="flex-1">영업업종</div>
        <div className="flex-1">면적(m²)</div>
        <div className="flex-1">계약시작일</div>
        <div className="flex-1">계약만료일</div>
        <div className="flex-1">월임대료</div>
      </div>

      {stores.map((elem) => {
        return (
          <div key={elem.index + elem.storeNum} className="flex">
            <div className="flex-1">{elem.index}</div>
            <div className="flex-1">{elem.status}</div>
            <div className="flex-1">{elem.subwayLine}</div>
            <div className="flex-1">{elem.subwayName}</div>
            <div className="flex-1">{elem.storeNum}</div>
            <div className="flex-1">{elem.storeType}</div>
            <div className="flex-1">{elem.size}</div>
            <div className="flex-1">{elem.contractStartDate}</div>
            <div className="flex-1">{elem.contractEndDate}</div>
            <div className="flex-1">{elem.montlyRentFee}</div>
          </div>
        )
      })}
    </div>
  )
}

export default StoreList
