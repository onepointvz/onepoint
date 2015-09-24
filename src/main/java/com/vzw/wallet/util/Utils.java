package com.vzw.wallet.util;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service("Utils")
public class Utils {
	
	@Autowired
    private MessageSource messageSource;
	
	public String getMessage(String key){
		String message = null;
				
		if(key != null){
			Locale currentLocale =  LocaleContextHolder.getLocale();
			message = messageSource.getMessage(key, null, currentLocale);
		}

		return message;
	}
}
