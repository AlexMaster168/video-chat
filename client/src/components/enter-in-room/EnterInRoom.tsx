import { FC } from 'react'
import { useNavigate } from 'react-router'

import { IEnterInRoomProps } from './EnterInRoom.types'
import { AppButton } from '../ui/app-button'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { setCurrentRoom } from '../../store/slices/roomsSlice'

export const EnterInRoom: FC<IEnterInRoomProps> = props => {
	const { roomId } = props

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const onClickEnterInRoom = async () => {
		navigate(`/room/${roomId}`)
		dispatch(setCurrentRoom(roomId))
	}

	return (
		<AppButton width={'auto'} onClick={onClickEnterInRoom}>
			Войти
		</AppButton>
	)
}
