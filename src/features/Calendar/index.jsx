import * as El from './styles'

export const Container = () => {
    return (
        <El.Container>
            <El.DataSession>
                <El.DataSessionElement>
                    5
                    <El.Day>Thur</El.Day>
                </El.DataSessionElement>
                <El.DataSessionElement>
                    6
                    <El.Day>Fri</El.Day>
                </El.DataSessionElement>
                <El.DataSessionElement>
                    7
                    <El.Day>Sat</El.Day>
                </El.DataSessionElement>
                <El.DayBold>
                    8
                    <El.Day>Sun</El.Day>
                </El.DayBold>
                <El.DataSessionElement>
                    9
                    <El.Day>Mon</El.Day>
                </El.DataSessionElement>
                <El.DataSessionElement>
                    10
                    <El.Day>Tues</El.Day>
                </El.DataSessionElement>
                <El.DataSessionElement>
                    11
                    <El.Day>Wed</El.Day>
                </El.DataSessionElement>
            </El.DataSession>
        </El.Container>
    )
}
