import { useState } from 'react'
import type { NextPage } from 'next'
import { useForm, SubmitHandler } from 'react-hook-form'
import Head from 'next/head'
import { PrimaryButton } from 'components/button/button'
import GameName from 'components/page/create-game/game-name'
import GameDescription from 'components/page/create-game/game-description'
import GameType from 'components/page/create-game/game-type'
import GameStartDatetime from 'components/page/create-game/game-start-datetime'
import Interval from 'components/page/create-game/interval'
import ThemeImage from 'components/page/create-game/theme-image'
import ConfirmModal from 'components/page/create-game/confirm-modal'
import type { Inputs } from 'components/page/create-game/inputs'
import { SystemConst } from 'components/const'

const CreateGamePage: NextPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues
  } = useForm<Inputs>()

  const confirm: SubmitHandler<Inputs> = (data) => {
    const inputs = { ...data } as Inputs
    setInputs(inputs)
    setIsConfirmModalShow(true)
  }
  const [isConfifrmModalShow, setIsConfirmModalShow] = useState(false)
  const [inputs, setInputs] = useState({} as Inputs)

  return (
    <div>
      <Head>
        <title>{SystemConst.APPLICATION_NAME} | 新しいゲームを作成する</title>
      </Head>

      <div>
        <h1 className='mb-8 text-lg'>新しいゲームを作成する</h1>
        <section className='mx-auto max-w-lg'>
          <form onSubmit={handleSubmit(confirm)}>
            <GameName control={control} errors={errors} />
            <GameDescription control={control} errors={errors} />
            <GameType control={control} errors={errors} />
            <Interval control={control} errors={errors} getValues={getValues} />
            <GameStartDatetime control={control} errors={errors} />
            <ThemeImage control={control} errors={errors} />
            <PrimaryButton onClick={() => {}} disabled={isSubmitting}>
              確認
            </PrimaryButton>
          </form>
        </section>
      </div>
      <ConfirmModal
        inputs={inputs}
        isConfirmModalShow={isConfifrmModalShow}
        setIsConfirmModalShow={setIsConfirmModalShow}
      />
    </div>
  )
}

export default CreateGamePage
