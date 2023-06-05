'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Dropdown } from 'flowbite-react'
import Image from 'next/image'

export const Spinner = () => {
	return (
		<div>
			<div role='status'>
				<svg
					aria-hidden='true'
					className='w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
					viewBox='0 0 100 101'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
						fill='currentColor'
					/>
					<path
						d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
						fill='currentFill'
					/>
				</svg>
				<span className='sr-only'>Loading...</span>
			</div>
			Preparing your file
		</div>
	)
}

export const AvatarDefault = () => {
	return (
		<div className='relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
			<svg
				className='absolute w-12 h-12 text-gray-400 -left-1'
				fill='currentColor'
				viewBox='0 0 20 20'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
					clip-rule='evenodd'
				></path>
			</svg>
		</div>
	)
}

const AccountDropDown = () => {
	const { data: session, status } = useSession()
	const loading = status === 'loading'

	const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

	return (
		<>
			<nav className='header-nav w-full border-gray-200 dark:bg-gray-900'>
				<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
					<a href='https://jobs.meurancho.pizza' className='flex items-center'>
						<Image
							src='https://pizzariameurancho.com.br/wp-content/uploads/2018/09/meurancho-logo-red.min_.svg'
							alt={'Username'}
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: '160px', height: 'auto' }} // optional
							className='h-8 mr-3'
						/>
						<span className='self-center text-1xl font-semibold whitespace-nowrap dark:text-white'>
							Jobs
						</span>
					</a>
					<div className='flex items-center md:order-2'>
						<Dropdown
							label='Dropdown bottom'
							placement='bottom'
							className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
						>
							<span className='sr-only'>Open user menu</span>
							<Image
								src='https://static-images.ifood.com.br/image/upload/t_high/logosgde/442ea04f-571b-4af6-8666-ea62bb63c1d8/202104011757_58q0_i.png'
								alt={'Username'}
								width={24}
								height={24}
								className='w-8 h-8 rounded-full'
							/>
						</Dropdown>
						<button
							type='button'
							className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
							id='user-menu-button'
							aria-expanded='false'
							data-dropdown-toggle='user-dropdown'
							data-dropdown-placement='bottom'
							onClick={handleDropDown}
						>
							<span className='sr-only'>Open user menu</span>
							<Image
								src='https://static-images.ifood.com.br/image/upload/t_high/logosgde/442ea04f-571b-4af6-8666-ea62bb63c1d8/202104011757_58q0_i.png'
								alt={'Username'}
								width={24}
								height={24}
								className='w-8 h-8 rounded-full'
							/>
						</button>

						{/* Dropdown menu */}
						<div
							//className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
							id='user-dropdown'
							className={`z-50 my-4 text-base position-absolute list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
								isOpen ? "block" : "hidden"
							}`}
						>
							<div className='px-4 py-3'>
								<span className='block text-sm text-gray-900 dark:text-white'>
									Meu Rancho Betim
								</span>
								<span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
									site@pizzariameurancho.com.br
								</span>
							</div>
							<ul className='py-2' aria-labelledby='user-menu-button'>
								<li>
									<a
										href='#'
										className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
									>
										Painel
									</a>
								</li>
								<li>
									<a
										href='#'
										className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
									>
										Talentos
									</a>
								</li>
								<li>
									<a
										href='#'
										className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
									>
										Ajustes
									</a>
								</li>
								<li>
									<a
										href='#'
										className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
									>
										Sair
									</a>
								</li>
							</ul>
						</div>
						<button
							data-collapse-toggle='mobile-menu-2'
							type='button'
							className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
							aria-controls='mobile-menu-2'
							aria-expanded='false'
						>
							<span className='sr-only'>Open main menu</span>
							<svg
								className='w-6 h-6'
								aria-hidden='true'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</div>

					<div
						className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
						id='mobile-menu-2'
					>
						<ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
							<li>
								<a
									href='#'
									className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
									aria-current='page'
								>
									Home
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
								>
									About
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
								>
									Services
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}

export default AccountDropDown
