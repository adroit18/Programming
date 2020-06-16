import java.util.*;
class Solution {
    public String validIPAddress(String IP) {
        Boolean checkForIPV4 = IP.indexOf(":") > 0 ? false : true;
        String delimiter = checkForIPV4 ? "." : ":";
        String ipStatus = "Neither";

        if(IP.indexOf(delimiter) == 0 || IP.lastIndexOf(delimiter) == IP.length()-1)
            return ipStatus;

        String[] individualComponents = IP.split("\\"+delimiter);

        int numberOfComponents = individualComponents.length;

        if(checkForIPV4){
            if(numberOfComponents!=4) return ipStatus;
            for(String thisIndividualComponents : individualComponents){
                char[] individualCharacters = thisIndividualComponents.toCharArray();
                if(individualCharacters.length <= 0
                        || individualCharacters.length > 3) return ipStatus;
                for(char thisCharacter : individualCharacters){
                    int thisUnicode = (int)thisCharacter;
                    if(thisUnicode < 48 || thisUnicode > 57)
                        return ipStatus;
                }
                int number = Integer.parseInt(thisIndividualComponents);
                if(number < 0 ||number > 255 ) return  ipStatus;
            }
            ipStatus = "IPv4";
        }else{
            if(numberOfComponents !=8) return ipStatus;
            for(String thisIndividualComponents : individualComponents){
                char[] individualCharacters = thisIndividualComponents.toCharArray();
                if(individualCharacters.length <= 0
                        || individualCharacters.length > 4) return ipStatus;

                for(char thisCharacter : individualCharacters){
                    int thisUnicode = (int)thisCharacter;
                    if(thisUnicode < 48 || thisUnicode > 57
                        && !(thisUnicode>=65 && thisUnicode<=70) && !(thisUnicode>=97 && thisUnicode<=102))
                        return ipStatus;
                }

            }
            ipStatus = "IPv6";
        }
        return ipStatus;
    }
}