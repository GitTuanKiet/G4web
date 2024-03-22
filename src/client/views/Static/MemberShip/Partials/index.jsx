import { useState } from 'react'

import RankIron from './ranks/Iron'
import RankBronze from './ranks/Bronze'
import RankSilver from './ranks/Silver'
import RankGold from './ranks/Gold'

const U22MemberDetails = () => {
  const [show, setShow] = useState('iron')
  return (
    <>
      <div className="w-full min-h-[30] py-10 flex flex-col">
        <strong onClick={() => setShow('gold')}>1. Thành viên VVIP 2024</strong>
        {show === 'gold' && <RankGold />}
        <strong onClick={() => setShow('silver')}>2. Thành viên VIP 2024</strong>
        {show === 'silver' && <RankSilver />}
        <strong onClick={() => setShow('bronze')}>3. Thành viên thân thiết (Member)</strong>
        {show === 'bronze' && <RankBronze />}
        <strong onClick={() => setShow('iron')}>4. Thành viên U22</strong>
        {show === 'iron' && <RankIron />}
      </div>
    </>
  )
}

export default U22MemberDetails
