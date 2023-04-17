import { useNavigate } from 'react-router'
import { FC } from 'react'
import { v4 } from 'uuid'

import { AppButton } from '../ui/app-button'

export const CreateRoom: FC = () => {
	const navigate = useNavigate()

	const onClickCreateRoom = () => {
		const roomId = v4()
		navigate(`/room/${roomId}`)
	}

	return (
		<AppButton width='150px' onClick={onClickCreateRoom}>
			Создать комнату
		</AppButton>
	)
}
