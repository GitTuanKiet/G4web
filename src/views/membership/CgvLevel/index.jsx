import { useState } from 'react'

import RankIron from './Partials/Iron'
import RankBronze from './Partials/Bronze'
import RankSilver from './Partials/Silver'
import RankGold from './Partials/Gold'

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
